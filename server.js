const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const mime = {
  'html': 'text/html', 'css': 'text/css', 'js': 'application/javascript',
  'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg',
  'svg': 'image/svg+xml', 'mp4': 'video/mp4', 'webp': 'image/webp',
  'ico': 'image/x-icon', 'json': 'application/json', 'pdf': 'application/pdf',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'woff': 'font/woff', 'woff2': 'font/woff2', 'ttf': 'font/ttf',
  'xml': 'application/xml', 'txt': 'text/plain', 'webmanifest': 'application/manifest+json'
};

const compressible = new Set([
  'text/html', 'text/css', 'application/javascript', 'application/json',
  'application/xml', 'text/plain', 'image/svg+xml'
]);

http.createServer((req, res) => {
  try {
    // Strip query string and decode URI
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    let p = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);

    fs.stat(p, (err, stat) => {
      if (err || !stat.isFile()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      let ext = path.extname(p).slice(1).toLowerCase();
      let contentType = mime[ext] || 'application/octet-stream';

      const headers = {
        'Content-Type': contentType,
        'Cache-Control': compressible.has(contentType)
          ? 'public, max-age=0, must-revalidate'
          : 'public, max-age=86400'
      };

      const acceptsGzip = /gzip/.test(req.headers['accept-encoding'] || '') && compressible.has(contentType);

      // Handle Range requests for large video files
      if (req.headers.range) {
        let parts = req.headers.range.replace(/bytes=/, "").split("-");
        let start = parseInt(parts[0], 10);
        let end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;

        if (start >= stat.size) {
          res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
          return res.end();
        }

        let chunksize = (end - start) + 1;

        res.writeHead(206, Object.assign({}, headers, {
          'Content-Range': `bytes ${start}-${end}/${stat.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
        }));

        fs.createReadStream(p, { start, end }).pipe(res);
      } else if (acceptsGzip) {
        headers['Content-Encoding'] = 'gzip';
        res.writeHead(200, headers);
        fs.createReadStream(p).pipe(zlib.createGzip()).pipe(res);
      } else {
        headers['Content-Length'] = stat.size;
        res.writeHead(200, headers);
        fs.createReadStream(p).pipe(res);
      }
    });
  } catch (e) {
    res.writeHead(500);
    res.end('Internal Server Error');
  }
}).listen(8080, () => console.log('Server running at http://localhost:8080'));

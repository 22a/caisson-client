var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:4001/execute',
  headers:
  { 'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded' },
  form:
  { timelimit: '3',
    memlimit: '1000',
    payload: 'id -u -n; id -u; ping 8.8.8.8; pwd; grep Cap /proc/self/status; dd if=/dev/urandom bs=3 count=1',
    lang: 'bash' }
    // payload: 'print(410 + 10)',
    // lang: 'python' }
    // payload: '#include<stdio.h>\nint main() { printf("Hello World\\n");  }',
    // lang: 'c' }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

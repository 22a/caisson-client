var request = require("request");

var options = { method: 'POST',
  url: `http://${process.env.CAISSON_EC2_IP}/execute`,
  headers:
  { 'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded' },
  form:
  { timelimit: '3',
    memlimit: '1000',

    lang: 'bash',
    payload: `
      yes
    `}

      // end=$((SECONDS+1))
      // while [ $SECONDS -lt $end ]; do
      //   echo "normal beans"
      //   >&2 echo "error beans";
      // done

      // :(){ :|:& };: # :pray: ty kernel memory limits
      // sleep 60; # this is prevented now
      // rm -rf /; # this is safe now ¯\_(ツ)_/¯

    // lang: 'bash',
    // payload: `
    //   pwd;
    //   id -u -n;
    //   id -u;
    //   ping 8.8.8.8;
    //   grep Cap /proc/self/status;
    //   dd if=/dev/urandom bs=3 count=1;
    // `}

    // lang: 'python',
    // payload: `
// print(410 + 10) # silly whitespace sensitve lanugages
    // `}

    // lang: 'c',
    // payload: `
    //   #include<stdio.h>
    //   int main() {
    //     printf("Hello World\\n");
    //   }
    // `}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

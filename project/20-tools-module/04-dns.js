var dns = require('dns');

dns.lookup('www.baidu.com', function onLookup(err, address, family) {
  console.log('ip地址', address);
  dns.reverse(address, function (err, hostnames) {
    if (err) {
      console.log(err.stack);
    }
    console.log('反向代理', + address + ': ' + JSON.stringify(hostnames));
  });
});
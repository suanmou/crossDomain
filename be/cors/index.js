var http = require('http');
var url = require('url');

var PORT = 8888;

// 创建一个http服务
var server = http.createServer(function(request,response) {
  // response.end('Hello world');
  // console.log('hello world');
  // response.end("var aaaa = {name: 'quanquan', friend: 'guiling'}");
  // response.end("aaaa({name: 'quanquan', friend: 'guiling'})");
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Methods', 'PUT');
  response.setHeader('Access-Control-Allow-Headers', 'token');
  response.setHeader('Access-Control-Max-Age', 5);

  response.end("{name: 'quanquan', friend: 'guiling'}");


});


server.listen(PORT,function() {
  console.log('服务启动成功,正在监听：',PORT);
});
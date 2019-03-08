var http = require('http');
var url = require('url');

var PORT = 8888;

// 创建一个http服务
// var server = http.createServer(function(request,response) {
//   // response.end('Hello world');
//   // console.log('hello world');
//   // response.end("var aaaa = {name: 'quanquan', friend: 'guiling'}");
//   response.end("aaaa({name: 'quanquan', friend: 'guiling'})");


// });
var server = http.createServer(function(request,response) {
  const queryObj = url.parse(request.url,true).query;
  response.end(`${queryObj.callback}({name:'suansuan',friend:'sasha'})`);
  // response.end("aaaa({name: 'quanquan', friend: 'guiling'})");


});

server.listen(PORT,function() {
  console.log('服务启动成功,正在监听：',PORT);
});
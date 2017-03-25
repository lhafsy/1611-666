//加载 express 模块（第三方模块）
var express = require('express');
//原生模块
var path = require('path');
//调用 express 模块
var app = express();
//调用mysql模块
var mq = require('mysql');
//连接mysql所需的用户名和密码
var mc = mq.createConnection({
  user:'root',
  password:''
    password:''
});
//加载 body-parser 中间件（第三方模块）
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//post 路由
app.get('/lha', urlencodedParser, function(request, response){
//连接mysql
	mc.connect(function(error,results){
    if(error){
      console.log('connection Error:'+error.message);
      return
    }
    console.log('connect to MySQL');
    // console.log(data);
  })数据库名字
//操作mysql数据库
  mc.query("use `数据库名字`");
  mc.query("select * from `数据表名字`",function(err,rs,fields){
    if(err){
      console.log(err);
    }else{
      response.send(rs);
    }
  })
});

app.use(express.static(path.join(__dirname + '/')));

app.listen(88);

//加载 express 模块（第三方模块）
var express = require('express');
//原生模块
var path = require('path');
//调用 express 模块
var app = express();
//调用mysql模块
var mysql = require('mysql');
//连接mysql所需的用户名和密码
var lha = mysql.createConnection({
  user:'root',
   port:   '3306',
  password:''
});
//加载 body-parser 中间件（第三方模块）
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/lha', urlencodedParser, function(request, response){
//连接mysql
  lha.connect(function(error,results){
    if(error){
      console.log('connection Error:'+error);
      return
    }
    console.log('connect to MySQL');
    // console.log(data);
  })
//操作mysql数据库
  lha.query("use `home`");
  lha.query("select * from `home`",function(err,rs,fields){
    if(err){
      console.log(err);
    }else{
      response.send(rs);
       console.log(err);
    }
  })
});

app.use(express.static(path.join(__dirname + '/')));

app.listen(88);

//加载 express 模块（第三方模块）
var express = require('express');
//原生模块
var path = require('path');
//调用 express 模块
var app = express();
//调用mysql模块
var mysql = require('mysql');
//连接mysql所需的用户名和密码
var server = mysql.createConnection({
  user:'root',
  database:'shijianfeishi',
  password:''
});
//加载 body-parser 中间件（第三方模块）
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/index', urlencodedParser, function(request, response){

  // console.log(request.body.data)
  // console.log(request)

  //连接mysql
  server.connect(function(error,results){
    if(error){
      console.log('connection Error:'+error);
      return
    }
    console.log('connect to MySQL');
      // console.log(data);
    })
  //操作mysql数据库
  server.query("use `shijianfeishi`");
  console.log(111)
  server.query("select * from `home`",function(err,rs,fields){
    if(err){
      console.log(err);
    }else{
     response.send(rs);
    }
  })
});

server.query("select * from `users`",function(err,rs,fields){
    if(err){
      console.log(err);
    }else{
     // response.send(rs);
    }
  })

app.post('/BombBox', urlencodedParser, function(request, response){
  console.log('a')
  server.connect(function(error,results){
    if(error){
      console.log('connection Error:'+error);
      return
    }
    console.log('connect to MySQL');
      // console.log(data);
    })
  //操作mysql数据库
  server.query("use `shijianfeishi`");
  console.log(111)
  server.query("select * from `home`",function(err,rs,fields){
    if(err){
      console.log(err);
    }else{
     response.send(rs);
    }
  })
})

app.post('/html/register', urlencodedParser,function(request, response) {
    console.log(request.body)
    var name = request.body.name;
    var password = request.body.password;
    server.query("SELECT * FROM users WHERE usersname='"+name+"'", function (err, data){
      if(err){
        console.log('{err: 1, msg: "数据库出错"}');
        response.end();
      }
      else{
        if(data.length>0){
          console.log('{err: 1, msg:"用户名已存在"}');
          response.send('用户名已存在');
        }
        else{
          console.log('111')
          server.query("INSERT INTO users (usersname,password) VALUES('"+name+"', '"+password+"')", function (err, data){
            if(err){
              console.log('{err: 1, msg: "数据库出错"}');
              response.end();
            }
            else{
              console.log('{err: 0, msg: "注册成功"}');
              response.end();
            }
          });
        }
      }
    });
});
app.post('/html/login',urlencodedParser,function(request,response){
    var name = request.body.name;
    var password = request.body.password;
    server.query("SELECT * FROM users WHERE usersname='"+name+"'", function (err, data){
          if(err)
          {
            console.log('{err: 1, msg: "数据库出错"}');
            response.end();
          }
          else
          {
            if(data.length==0)
            {
              console.log('{err: 1, msg: "此用户名不存在"}');
              response.send('此用户名不存在');
            }
            else
            {
              if(data[0].password==password)
              {
                console.log('{err: 0, msg: "登录成功"}');
                response.end();
              }
              else
              {
                console.log('{err: 1, msg: "用户名或密码有误"}');
                response.end();
              }
            }
          }
        });

})

// response.send("lll")
app.use(express.static(path.join(__dirname + '/')));

app.listen(88,function(){
  console.log(666)
});





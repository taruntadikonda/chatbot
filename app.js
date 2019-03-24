var express=require('express');
var hbs=require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var AssistantV1 = require('watson-developer-cloud/assistant/v1');

var app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//engine
app.engine('hbs',hbs({extname:'hbs',layoutsDir:__dirname+'/views'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


var assistant = new AssistantV1({
  username: 'apikey',
  password: 'AoaluWv-PXNaETwjbalpUXTuuz2O0SHYveuKAxXy1Eso',
  url: 'https://gateway-lon.watsonplatform.net/assistant/api',
  version: '2019-03-23'
});
 
app.get('/',function(req,res){
  //console.log(req.query.valid);
  res.render('error');
})

app.post('/',function(req,res){
  console.log(req.body.entry);
  assistant.message(
    {
      input: { text: req.body.entry},
      workspace_id: '2390703a-70de-4939-9284-aa9a63f10161'
    },
    function(err, response) {
      if (err) {
        console.error(err);
      } else {
        //console.log(JSON.stringify(response, null, 2));
        console.log(response.output.text);
        res.redirect("/");
      }
    }
  );
  
  
})



app.listen(8000,function(){
  console.log("server at port 8000");
})
//importar o módulo do framework Express
var express = require("express");
//importar o módulo do Consign
var consign = require("consign");
//importar o body-parser
var bodyParser = require("body-parser");
//importar express-validator
var expressValidator = require("express-validator");
//iniciar o objeto do Express
var app = express();

//setar as variáveis "view engine" e "views" do Express
app.set("view engine", "ejs");
app.set("views", "./app/views");

//configurar o middleware express.static
app.use(express.static("./app/public"));

//configurar o middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//configurar o middleware express-validator
app.use(expressValidator());

//efetua o autoload das routes, models e controllers para o objeto App
consign()
  .include("app/routes")
  .then("app/models")
  .then("app/controllers")
  .into(app);

//exportar o objeto app
module.exports = app;

// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('hypermediator.server');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
hypermediator.server.express = cljs.nodejs.require.call(null,"express");
hypermediator.server.say_hello_BANG_ = (function hypermediator$server$say_hello_BANG_(req,res){
return res.send("Hello world!");
});
hypermediator.server._main = (function hypermediator$server$_main(){
var app = hypermediator.server.express.call(null);
app.get("/",hypermediator.server.say_hello_BANG_);

return app.listen((8080),((function (app){
return (function (){
return cljs.core.println.call(null,"Server started on port 8080");
});})(app))
);
});
cljs.core._STAR_main_cli_fn_STAR_ = hypermediator.server._main;

//# sourceMappingURL=server.js.map
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5788__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5789__i = 0, G__5789__a = new Array(arguments.length -  0);
while (G__5789__i < G__5789__a.length) {G__5789__a[G__5789__i] = arguments[G__5789__i + 0]; ++G__5789__i;}
  args = new cljs.core.IndexedSeq(G__5789__a,0);
} 
return G__5788__delegate.call(this,args);};
G__5788.cljs$lang$maxFixedArity = 0;
G__5788.cljs$lang$applyTo = (function (arglist__5790){
var args = cljs.core.seq(arglist__5790);
return G__5788__delegate(args);
});
G__5788.cljs$core$IFn$_invoke$arity$variadic = G__5788__delegate;
return G__5788;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__5791__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5792__i = 0, G__5792__a = new Array(arguments.length -  0);
while (G__5792__i < G__5792__a.length) {G__5792__a[G__5792__i] = arguments[G__5792__i + 0]; ++G__5792__i;}
  args = new cljs.core.IndexedSeq(G__5792__a,0);
} 
return G__5791__delegate.call(this,args);};
G__5791.cljs$lang$maxFixedArity = 0;
G__5791.cljs$lang$applyTo = (function (arglist__5793){
var args = cljs.core.seq(arglist__5793);
return G__5791__delegate(args);
});
G__5791.cljs$core$IFn$_invoke$arity$variadic = G__5791__delegate;
return G__5791;
})()
;

return null;
});

// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5778__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5779__i = 0, G__5779__a = new Array(arguments.length -  0);
while (G__5779__i < G__5779__a.length) {G__5779__a[G__5779__i] = arguments[G__5779__i + 0]; ++G__5779__i;}
  args = new cljs.core.IndexedSeq(G__5779__a,0);
} 
return G__5778__delegate.call(this,args);};
G__5778.cljs$lang$maxFixedArity = 0;
G__5778.cljs$lang$applyTo = (function (arglist__5780){
var args = cljs.core.seq(arglist__5780);
return G__5778__delegate(args);
});
G__5778.cljs$core$IFn$_invoke$arity$variadic = G__5778__delegate;
return G__5778;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__5781__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5782__i = 0, G__5782__a = new Array(arguments.length -  0);
while (G__5782__i < G__5782__a.length) {G__5782__a[G__5782__i] = arguments[G__5782__i + 0]; ++G__5782__i;}
  args = new cljs.core.IndexedSeq(G__5782__a,0);
} 
return G__5781__delegate.call(this,args);};
G__5781.cljs$lang$maxFixedArity = 0;
G__5781.cljs$lang$applyTo = (function (arglist__5783){
var args = cljs.core.seq(arglist__5783);
return G__5781__delegate(args);
});
G__5781.cljs$core$IFn$_invoke$arity$variadic = G__5781__delegate;
return G__5781;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
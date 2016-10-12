require.ensure(["./module1",'jquery'], function(require) {
    // console.log("aaa");
     //var module2 = require("./module2");
    //console.log("bbb");
    //require("./module1");
    var $ = require("jquery");
    $("body").click(function(){
	   	 var module2 = require("bundle!./module2");
		 console.log("bbb");
    });
    
});


// var a = require("a");

// require.ensure(["b"], function(require) {
//     // a named chunk
//     var c = require("c");
// }, "my own chunk");

// require.ensure(["b"], function(require) {
//     // another chunk with the same name
//     var d = require("d");
// }, "my own chunk");

// require.ensure([], function(require) {
//     // the same again
// }, "my own chunk");

// require.ensure(["b"], function(require) {
//     // chunk without name
//     var d = require("d");
// });


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
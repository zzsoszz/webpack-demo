require(["./module1","jquery"], function(module1,$) {
    // console.log("aaa");
    // var module2 = require("./module2");
    // console.log("bbb");
    $("body").click(function(){
	   	 var module2 = require("bundle!./module2");
		 console.log("bbb");
    });
    
});
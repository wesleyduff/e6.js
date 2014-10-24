'use strict';

(function(){
    var mod = require('module');
    console.log(mod.greet());
    
    /* 
    require our e6 library 
    */
    var edMod = require('e6');
    //Create new object from module
    var _e6 = Object.create(edMod.e6());
    //call the init method
    console.log(_e6.init(1,2,3));
})();




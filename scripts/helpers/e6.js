/* Requirements

+ --
+ require.js
+ // load require.js like so
+ <script data-main="scripts/main" src="scripts/require.js"></script>
+ --
+
require(["helper/e6.js"], function(e6){
  e6.init();
});
*/

exports.e6 = function(){
  return  {
    init : function(){
        this.methods.buildArrayMethods();
    },
    methods : {
        buildArrayMethods : function(){
            if(!Array.prototype.find){
                Array.prototype.find = function(predicate) {
                    if (this == null) {
                      throw new TypeError('Array.prototype.find called on null or undefined');
                    }
                    if (typeof predicate !== 'function') {
                      throw new TypeError('predicate must be a function');
                    }
                    var list = Object(this);
                    var length = list.length >>> 0;
                    var thisArg = arguments[1];
                    var value;
                
                    for (var i = 0; i < length; i++) {
                      value = list[i];
                      if (predicate.call(thisArg, value, i, list)) {
                        return value;
                      }
                    }
                    return undefined;
                  };
            } /* END : Array find */
            
            /* Etend Array to add a Remove Duplicates from Array Function */
            if(!Array.prototype.removeDuplicates){
                Array.prototype.removeDuplicates = function () {
                    var returnArray = [],
                        obj = {};
                    
                    for (var i = 0; i < this.length; i++) {
                        obj[this[i]] = 0;
                    }
                    
                    for (i in obj) {
                        returnArray.push(i);
                    }
                    
                    return returnArray;
                };
            }
            
            /* Array of 
              Returns an array of the elements provided
             */
             if(typeof Array.of !== 'function'){
                 Array.of = function(){
                     return Array.prototype.slice.call(arguments)
                 }
             }
            
        }
    }
 };
};
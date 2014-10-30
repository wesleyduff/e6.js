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
             
             /*
             Map an array with a passed in function. 
             Each element in the array will run though the provided function and return 
             a new array with the mapped values.
             
            function returnInt(element) {
              return parseInt(element, 10);
            }
            
            ['1', '2', '3'].map(returnInt); // [1, 2, 3]
            // Actual result is an array of numbers (as expected)
            
            // A simpler way to achieve the above, while avoiding the "gotcha":
            ['1', '2', '3'].map(Number); // [1, 2, 3]
             
             */
             if(!Array.prototype.map){
                 Array.prototype.map = function(predicate, thisArg){
                     
                     if(this === null){
                        throw new TypeError(' this is null or not defined ');
                     }
                     if(typeof predicate !== 'function'){
                         throw new TypeError(predicate + ' is not a function');
                     }
                     
                     var    T, A, k,
                            O = Object(this),
                            len = O.length >>> 0;
                     
                     A = new Array(len);
                     
                     k = 0;
                     
                     while (k < len){
                         var kValue, mappedValue;
                         if(k in O){
                             
                             kValue = O[k];
                             
                             mappedValue = predicate.call(T, kValue, k, O);
                             
                             A[k] = mappedValue;
                             
                         }
                         k++
                     }
                     
                     return A;
                 }
             }
            
        }
    }
 };
};
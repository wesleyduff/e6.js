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
            }
            
        }
    }
 };
};
        /*
        Summary
        -------
        The find() method returns a value in the array,
        if an element in the array satisfies the provided
        testing function. Otherwise undefined is returned.

        Syntax
        ------
        arr.find(callback[, thisArg])

        Parameters
        ----------
        callback
          Function to execute on each value in the array, taking three arguments:
        element
          The current element being processed in the array.
        index
          The index of the current element being processed in the array.
        array
          The array find was called upon.
        thisArg
          Optional. Object to use as this when executing callback.
        
        methods : {
            find : function(predicate){
                if(!Array.prototype.find){
                    throw new TypeError('Array.prototype.find called on null or undefined');
                }
                if(typeof predicate !== 'function'){
                    throw new TypeError('predicate must be a function');
                }
                var list = Object(this),
                    length = list.length >>> 0,
                    thisArg = arguments[1],
                    value;

                (function retunFunc(n=0){
                    n >= length ?
                        (function(){
                            return false;
                        })() :
                        (function(){
                            n++;
                            value = list[n];
                            if(predicate.call(thisArg, value, n, list)){
                                return value;
                            }
                            retunFunc(n);
                        })();
                })();
                return undefined;
            }
        }
}


*/
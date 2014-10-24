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

define(function(){
  return {
    init : function(){
      this.methods();
    },
    methods : function(){
      console.log('inside methods');
      return this;
    }
  }
});

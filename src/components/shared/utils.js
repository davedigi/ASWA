//makes all objects iterable just like Maps!!! YAY
//iterates over Object.keys() (which already ignores prototype chain for us)
Object.prototype[Symbol.iterator] = function() {
   var keys = Object.keys(this)[Symbol.iterator]();
   var obj = this;
   var output;
   return {next:function() {
       if (!(output = keys.next()).done)
           output.value = [output.value, obj[output.value]];
       return output;
   }};
};

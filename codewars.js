//This function should return an object, but it's not doing what's intended. What's wrong?
function mystery() {
    var results =  {sanity: 'Hello'};
    return results;
  }

  // doing a codewar morroe

  /*In some scripting languages like PHP, there exists a logical operator
   (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata).
   The exclusive or evaluates two booleans. It then returns true if exactly one of the two 
   expressions are true, false otherwise.
   Since we cannot define keywords in Javascript (well, at least I don't know how to do it), 
   your task is to define a function xor(a, b) where a and b are the two expressions to be 
   evaluated. Your xor function should have the behaviour described above, returning true if 
   exactly one of the two expressionsevaluate to true, false otherwise.*/
   function xor(a, b) {
    // TODO: Program Me 
      if ((a === true  && b === false) || (a === false && b === true) ){
        return true;
      }else{
        return false
      }
     
  }

  /*Create a function called _if which takes 3 arguments: a value bool and 2 functions 
  (which do not take any parameters): func1 and func2
When bool is truthy, func1 should be called, otherwise call the func2. */
function _if(bool, func1, func2) {
  // ...
     if(bool){
       func1()
     }else{
        func2()
     }
}
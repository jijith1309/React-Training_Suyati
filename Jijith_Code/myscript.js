
//1...copy of an arra using spread operator
// Here original Array wont get affected
var originalArr=['a','b','c'];
var shallowCopiedArr=[...originalArr];
shallowCopiedArr.push('Fake entry');
console.log(originalArr);
console.log(shallowCopiedArr);


//2...copy of an array using =
// Here original Array will get affected
var deepCopyorigArr=['A','B','C'];
var deepCopiedNewArr=deepCopyorigArr;
deepCopyorigArr.push('Fake entry 2');
console.log(deepCopyorigArr);
console.log(deepCopiedNewArr);


//Shallow copy of object
// var origObj={prop1:'item1',prop2:'item2',prop3:'item3'};
// var shallowCopiedObjUsingSpread=[...origObj];
// //var shallowCopiedArr=myArr;
// origObj.prop1='Fake data';
// console.log(origObj.prop1);
// console.log(shallowCopiedObjUsingSpread.prop1);

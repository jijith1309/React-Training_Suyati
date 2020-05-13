
//1...copy of an arra using spread operator
// Here original Array wont get affected
var originalArr1=['a','b','c'];
var shallowCopiedArr=[...originalArr1];
shallowCopiedArr.push('Fake entry');
console.log(originalArr1);
console.log(shallowCopiedArr);


//2...copy of an array using =
// Here original Array will get affected
var originalArr2=['A','B','C'];
var originalArr2_duplicate=originalArr1;
originalArr2_duplicate.push('Fake entry 2');
console.log(originalArr1);
console.log(originalArr2_duplicate);


//3.Copy of object using =
var origObj1={prop1:'item1',prop2:'item2',prop3:'item3'};
var shallowCopiedObj=origObj1

shallowCopiedObj.prop1='Fake data';
console.log('Original Obj Item:'+origObj1.prop1);
console.log('Duplicate item:'+shallowCopiedObj.prop1);



//4. copy of object using spread operator
var origObj2={prop1:'ITEM1',prop2:'ITEM2',prop3:'ITEM3'};
var origObj2_Duplicate={...origObj2};

origObj2_Duplicate.prop1='Fake data';
console.log('Original Obj Item:'+origObj2.prop1);
console.log('Duplicate item:'+origObj2_Duplicate.prop1);

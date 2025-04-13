function callbackFunction(name, otherFunction){
    console.log(`Hello ${name}`);
    otherFunction();
}

function nestedFunction(){
    console.log('Inside Function');
}

callbackFunction('Harshil', nestedFunction);
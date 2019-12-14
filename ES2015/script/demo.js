/*
class Person {
 
    constructor() {
        console.log('111111');
    }

    greetuser() {
        return 50;
    }

}

class myClass extends Person {
    constructor() {
        super();
        console.log('222222');
    }

    greetuser1() {
       console.log( super.greetuser() );
    }

}

//var className = new Person();
// className.greetuser();

let newClassName = new myClass();
newClassName.greetuser1();

//console.log(typeof className);

*/
// default params 
/*
let assignValue = 10;

function userbase(value) {
    if(!undefined)

    console.log(value);
}

userbase(10);

*/
// rest operators
function restDemo(red) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    //console.log(red);
    console.log(colors);
}
restDemo('Red', 'blue', 'pink', 'black');
//# sourceMappingURL=demo.js.map
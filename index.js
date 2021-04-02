function receivesAFunction(callback) {
    return callback ();
}
// receivesAFunction (function (callback){return callback;});


// function returnsANamedFunction(hello, callback) {
//     return callback(hello);
// }
// returnsANamedFunction ('hello world', function (hello){return hello;});


// function returnsANamedFunction(){
//     console.log(fn(returnsANamedFunction));
// }
// returnsANamedFunction (function(){return returnsANamedFunction;});

function returnsANamedFunction(){
    function namedFunction(){
        return '';
    }
return namedFunction;
}
returnsANamedFunction();

// returnsANamedFunction (function(){return ANamedFunction;});


// function returnsANamedFunction(fn){
//     fn(function() {
//         console.log('message');
//     })
// }


function returnsAnAnonymousFunction() {
    return function () {
    console.log('Completed');
}
}

// returnsAnAnonymousFunction();
// returnsAnAnonymousFunction (function(){return returnsAnAnonymousFunction;});
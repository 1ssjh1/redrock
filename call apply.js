// mdn描述













// 1.使用 call 方法调用父构造函数

// 在一个子构造函数中， 你可以通过调用父构造函数的 call 方法来实现继承， 类似于 Java 中的写法。 下例中，
//  使用 Food 和 Toy 构造函数创建的对象实例都会拥有在 Product 构造函数中添加的 name 属性和 price 属性,
//   但 category 属性是在各自的构造函数中定义的。


// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//     // console.log(this);
// }

// function Toy(name, price) {
//     Product.call(this, name, price);
//     this.category = 'toy';
//     // console.log(this);
// }

// var cheese = new Food('feta', 5);
// var fun = new Toy('robot', 40);
// console.log(cheese);
// console.log(fun);



// 2.使用 call 方法调用匿名函数

// 在下例中的 for 循环体内，我们创建了一个匿名函数，
// 然后通过调用该函数的 call 方法，将每个数组元素作为指定的 this 值执行了那个匿名函数
// 这个匿名函数的主要目的是给每个数组元素对象添加一个 print 方法，
// 这个 print 方法可以打印出各元素在数组中的正确索引号。当然，
// 这里不是必须得让数组元素作为 this 值传入那个匿名函数（普通参数就可以），目的是为了演示 call 的用法。





// var animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Fail' }
// ];

// for (var i = 0; i < animals.length; i++) {
//     (function(i) {
//         this.print = function() {
//             console.log('#' + i + ' ' + this.species +
//                 ': ' + this.name);
//         }
//         this.print();
//     }).call(animals[i], i);
// }









// 3.使用 call 方法调用函数并且指定上下文的 'this'

// 在下面的例子中，当调用 greet 方法的时候，该方法的this值会绑定到 obj 对象。




// function greet() {
//     var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
//     console.log(reply);
// }

// var obj = {
//     animal: 'cats',
//     sleepDuration: '12 and 16 hours'
// };

// greet.call(obj); // cats typically sleep between 12 and 16 hours











// 4.使用 call 方法调用函数并且不指定第一个参数（argument）

// 在下面的例子中，我们调用了 display 方法，但并没有传递它的第一个参数。如果没有传递第一个参数，this 的值将会被绑定为全局对象。
// Arrow function
const logger = log => console.log(log)
logger('Hello World') // Hello World

// Enhandced object literals
var names = 'Javascript'
var price = 1000
var course = {
    names,
    price,
    getNames() {
        return this.names
    }
}
console.log(course)

var fieldNames = 'names'
var fieldPrice = 'Price'
var fieldCourse = {
    [fieldNames]: 'Javascript',
    [fieldPrice]: 1000
}
console.log(fieldCourse)

// Destructuring & Rest
var array = ['JS', 'React', 'Ruby']
var [a, ...rest] = array
console.log(a);
console.log(rest);

var courses = {
    name: 'JS',
    price: 1000,
    img: 'address/path',
    // discription: 'Có mô tả',
    children: {
        name: 'ReactJS'
    }
}
var {name : parentName, children: {name: childName}, discription = 'Không có mô tả', ...rest} = courses
console.log(parentName);
console.log(childName);
console.log(discription);
console.log(rest);

var logger2 = (...param) => {
    console.log(param);
}
logger2(0)

var logger3 = ({name, price, ... rest}) => {
    console.log(name)
    console.log(price)
    console.log(rest)
}
logger3({
    name: 'JS',
    price: 10000,
    description: 'Content'
})

// Spread operator => Toán tử giải
var arr1 = ['1', '2', '3']
var arr2 = ['4', '5', '6']
var arr3 = [...arr2, ...arr1]
console.log(arr3);

var obj1 = { name: 'JS' }
var obj2 = { price: 100000 }
var obj3 = {...obj1, ...obj2}
console.log(obj3);

var defaultConfig = {
    api: 'https://domain-khoa-hoc',
    apiVersion: 'v1'
}

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-bai-tap'
}
console.log(exerciseConfig);

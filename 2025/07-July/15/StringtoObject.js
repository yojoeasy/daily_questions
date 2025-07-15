// Convert Query String to Object
// 🧩 Problem:
// You're given a query string (like in a URL). Write a function to convert it into an object.

function stringToObject(str){
    let obj ={};
    let arr = str.split('&');
    for(val of arr){
        let [key, value]=val.split('=');
        obj[key] = value;
    }
    return obj;
}

console.log(stringToObject("user=Yogesh&age=27&city=Dehradun"));   //{ user: "Yogesh", age: "27", city: "Dehradun" }



function stringToObject1(str) {
  return Object.fromEntries(new URLSearchParams(str));
}
console.log(stringToObject1("user=Yogesh&age=27&city=Delhi"));  //{ user: 'Yogesh', age: '27', city: 'Delhi' }

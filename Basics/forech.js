const codding = ["js", "ruby","java","python","cpp"];

// codding.forEach(function (item) {

//     console.log(item);
// })


// codding.forEach((item) =>{

// console.log(item);
// })

// function printme(items) {

//     console.log(items)
// }

// codding.forEach(printme);

// codding.forEach( (item, index, arr) => {

//     console.log(item, index, arr);

// })

const myCodding = [

    {

languageName : "javascript",
languageFileName : "js"

    },
    {
languageName : "java",
languageFileName : "java"

    },

    {
languageName : "Python",
languageFileName : "py"

    }
]

myCodding.forEach( (item) => {

    console.log(item.languageName, "- ", item.languageFileName);

})
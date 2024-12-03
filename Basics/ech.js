// for off loop 

const arr = [1,2,3,4,5]

for (const num of arr) {
//  console.log(num);
}

const greetings = "Hello Words!"

for (const greet of greetings) {
//   console.log(`Each Char of : ${greet}`);  
}
// Mpas 

const map = new Map()

map.set('In', "Inida")
map.set('USA', "United State of America")
map.set('fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,"-", value);
}

const myObject = {

    'game1': 'NFS',
    'game2': 'Spiderman',
    'game3': "firefox"

}

for (const [key, value] of object) {
    // console.log(key, " - ", value);
}
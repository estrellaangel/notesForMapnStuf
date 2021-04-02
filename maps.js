let map = new Map();

for(let i = 1; i<=100; i++){
    let key = `key${i}`;
    let value = `value${i}`;
    map.set(key, value);
}

// console.log(map.size);


let cakeRecipe = new Map ([
    ['butter', '1/2 cup'],
    ['eggs', '1 large'],
    ['vanilla extract', '2 teaspoons'],
    ['flour', '1 1/2 cups'],
    ['baking powder', '1-3/4 teaspoons'],
    ['milk', '1/2 cup']
]);

cakeRecipe.set('white sugar', '2 cups'); //Adds 'white sugar' as key and '2 cups' as the value

console.log(cakeRecipe.has('eggs')); //returns true since there are eggs
console.log(cakeRecipe.get('eggs')); //returns the value for the key eggs which is 1 large

cakeRecipe.set('eggs', '2 eggs'); //since the key already exist the map will delete the old one and put the brand new one

cakeRecipe.delete(`vanilla extract`);
cakeRecipe.set('chocolate', '1 bar');

console.log(cakeRecipe);


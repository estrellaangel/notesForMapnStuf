let megatron = new Map ([
    ['name', 'megatron'],
    ['ID', 122940 ],
    ['Team', 'Decepticon'],
    ['Kills', ''],
    ['Deaths', 5 ],
    ['Movies', 6 ],
    ['Degree', ''],
    ['LEDs', 4029480 ],
    ['Facorite Animal', 'rabbits'],
    ['Favorite Food', '']
])

for(let keys of megatron.keys()){
    if(megatron.get(keys) != ''){
        console.log(keys);
        let vals = megatron.get(keys);
        var para = document.createElement("p");
        var node = document.createTextNode(`key: ${keys} val: ${vals}`);
        para.appendChild(node);
        var element = document.getElementById("megatrons");
        element.appendChild(para);
    }
}

for(let key of megatron.values()){
    console.log(Number(key))
    if(typeof key == 'number'){
        var para = document.createElement("p");
        var node = document.createTextNode(key);
        para.appendChild(node);
        var element = document.getElementById("megatrons");
        element.appendChild(para);
    }
}
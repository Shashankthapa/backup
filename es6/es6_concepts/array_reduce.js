// Learning reduce in javascript

const list = [
    {name : "Monitor", price : 100},
    {name : "CPU", price : 300},
    {name : "Mouse", price : 50},
    {name : "Table", price : 300}
]

// tot_price is the accumulator and price is the value of the next.
// const mp_reduc = lists.reduce((tot_price, list) => {
//     return tot_price + list.price;
// },0);

// console.log(mp_reduc);


const mp_red = list.reduce((acc, parts) => {
    const price = parts.price;
    if(acc[price] == null) acc[price] = [];
    acc[price].push(parts.name);
    console.log(acc);
    return acc; 
},{})

console.log(mp_red);
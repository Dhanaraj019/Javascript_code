// Arrays
let post = ["Red","Blue","Black"];
post[3]=null
post[2]="yellow";
console.log(post);
console.log(post.length);

let bike = ["Royal Enfield","Yamaga","Duke"];
bike.push("BMW");
console.log(bike);
bike.unshift("Shine");
console.log(bike);
bike.shift();
console.log(bike);
bike.pop();
console.log(bike);
bike.pop();
console.log(bike);
for (let i = 0; i< bike.length; i++) {
    console.log(bike[i]);
}

//Array Methods
let cities = ["Kanada","USA","UK","India","China"];
console.log(cities.includes("Kanada"));
console.log(cities.includes("Mumbai"));
console.log(cities.indexOf("USA"));
console.log(cities.indexOf("TamilNadu"));
console.log(cities.join("|"));
console.log(cities.join(" % "));
console.log(cities.slice(1,4));
console.log(cities.splice(0,2));
console.log(cities.splice(0,1,"TATA","Mahendra"));

//slice & splice
let arr = [100,200,300,400];
let a = arr.slice(1,3);
let b = arr.splice(1,2,500);
console.log(arr);
console.log(a);
console.log(b);

//map 
let price = [100,200,300,400]
console.log(price);
let newPrice = price.map(function (n) {
    return n*2;
});
let newPrice1 = price.map(n => n*4);
console.log(newPrice);
console.log(price);
console.log(newPrice1);

//filter
let age = [30,24,35,6,43,88,19,21,16,8];
let eligibile = age.filter(function (n) {
    return n >= 18;
});
console.log(eligibile);
console.log(age);

//find
let numId = [35,25,67,19,91,37];
let numFind = numId.find(function (n,m) {
    return n >= 35;
    return m >100;
});
console.log(numFind);
console.log(numId);

//reduce
let prices = [100, 200, 300, 400];
let totalBill = prices.reduce(function(sum, price){
    return sum + price;
}, 0);
let totalBill1 = prices.reduce((m,n )=> m+n , 0);
console.log(totalBill);
console.log(totalBill1);
console.log(prices);

//Sort
let marks = [200,100,737,11,83,882,1000,2910];
marks.sort((a,b) => a-b);
console.log(marks);
marks.sort((a,b) => b-a);
console.log(marks);



// console.dir(document);
// const div = document.getElementsByClassName("parent");
// console.log(div);
// // div[0].innerText = "Abes Engineering College";
// div[0].innerHTML = "<h2 style = color : 'red'> ABESEC </h2>";
// const h1 = document.createElement("h1");
// h1.innerText = "Element is created by Dom function"

// h1.style.backgroundColor = "beige";
// h1.style.color = "red";
// div[0].appendChild(h1);
// console.log(h1);

// const img = document.createElement('img');
// img.src = "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// img.setAttribute("height","400px");
// console.log(img);

// div[0].appendChild(img);
// div[0].removeChild(img);

// const button = document.getElementById("btn");
// console.log(button);

// const display = document.getElementById("disp");
// console.log(display);

// const getData =()=>{
//     console.log("Calling getData Function");
//     display.innerHTML = "<h3 style = color : red > Welcome to CSE DEpartment </h3>";
// }

// button.addEventListener("click", getData);

// const promise1 = new Promise((resolve, reject) => {
//     let a = 12;
//     if(a > 10){
//         resolve("Value of a is resolved");
//     }
//     else{
//         reject("a is rejected");
//     }
// })

// promise1.then((msg) => {console.log(msg)})
// .catch(error => {console.log(error)})
// .finally(msg => {console.log("All resources have been closed")})

// const promise1 = new Promise((reslove, reject) => {
//     let a  = Math.random(0,1)*1000;
//     if(a > 10){
//         reslove("The Value for a is: " + a);
//     }
//     else{
//         reject("a is rejected");
//     }
// })

// promise1.then((msg) => {console.log(msg)})
// .catch(error => {console.log(error)})
// .finally(msg => {console.log("All resources have been closed")})

const response = fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        console.log(res.products[0].id + " " + res.products[0].title)
    })
})


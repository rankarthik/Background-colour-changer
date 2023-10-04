let btn = document.getElementById("btn").onclick= function bgcolorchanger(){

 let a= Math.floor(Math.random() * 254);
 let b= Math.floor(Math.random() * 254);
 let c= Math.floor(Math.random() * 254);

 document.body.style.background= `rgb(${a},${b},${c})`;
 
console.log(a+b)
}

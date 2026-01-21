//let obj = {
//    name: "Aayan",
//    age: 18
//}
//console.log(obj);
//

//const paragraph = document.querySelector("p");
//paragraph.innertext = "this is the paragraph";
//paragraph.style.color = "Red";
//console.log(paragraph);

//const para= document.getElementById("para");
//para.innerText = "This is the paragraph";
//para.style.color= "Blue";
//console.log(para)


//const para = document.getElementsByClassName("para");
//para[0].innerText = "This is the paragraph";
//para[1].innerText = "Hello dosto";
//para[1].style.color = "Blue";
//console.log(para)


//const para = document.querySelectorAll("para");
//para[0].innerText = "This is the paragraph";
//para[1].style.color = "Blue";
//console.log(para)
//
//let arr=[1,2,3,4,5];

//const newArr = arr.map((ele)=> ele);
//arr.array.forEach(ele)
// console.log(ele);
//
//const container=document.querySelector(".container");
//container.innerHTML = "<h1>This is the container</h1>";
////console.log(container);


//const btn=document.querySelector("#btn");
//btn.classList.add("btn");

//btn.classList.remove("btn") // iska matlab hai ki btn class ko remove ho gaya aur wapas se default ho gaya ki js apply nahi hui


//haa functions ko alag karke bhi likh sakte hai

//function message(event){
//    console.log(event.key);
//
//    alert("Button Clicked");
//}


//btn.addEventListener("keydown", message);

//btn.addEventListener("keydown", message);      // yeah dono use hoye hia like jab bhi ham 

//btn.addEventListener("click", message);
//btn.removeEventListener("click", message); (used to remove the event listener)



//btn.addEventListener("click", function () { alert("Button Clicked") }); // yeah button click karne pai alert deta hai
//btn.addEventListener("mouseover",function (){alert("Button Clicked")}); // yeah button pai mouse le jane pai alert deta hai


//const form=document.querySelector("form");
//form.addEventListener("submit", function (event) {
//    event.preventDefault();  //yeh line form ko submit hone se rokta hai
//    console.log("Form Submitted");
//
//})


const container =document.querySelector(".container");
const button =document.querySelector("button");

container.addEventListener("click", function (event){
    console.log("Container Clicked");
}, false);

//true ka matlab hai ki event capturing hoga
//false ka matlab hai ki event bubbling hoga

button.addEventListener("click", function (event){
    console.log("Button Clicked ");
}, false);
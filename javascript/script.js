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


//const container =document.querySelector(".container");
//const button =document.querySelector("button");
//
//container.addEventListener("click", function (event){
//    console.log("Container Clicked");
//}, false);

//true ka matlab hai ki event capturing hoga
//false ka matlab hai ki event bubbling hoga

//button.addEventListener("click", function (event){
//}, false);
//  console.log("Button Clicked ")


// debugger
// console.log(a)
// console.log(b)

// let a= 23456
// var b= 5343



// function print(){
//     console.log("jai mata di")

// }

// function first (){
//     second()
// }

// function second () {
//     third()
// }
// function third (){
//     console.trace()
// }

// first()

// console.log("Hello")

// function infinite(){
//     infinite()               // yeah use hota hai for infinite message ya jab bhi site work nahi karti
// }
// infinite()

// let total=40

// function calculate(){
//     console.log(total)
//     //let total=100 // agar yeah hoga to error aaega aur agar var hua to undefined
//     var total=100
// }

// calculate()

// console.log("first line")
// setTimeout(()=>{console.log("after 5 sec")},5000)
// console.log("secondline")

//setTimeout(() => { alert("NAYVA KAB JAA RAHI HAI MARNE"); }, 2000)// THIS IS USED FOR ALERTS MESSAGES

// setTimeout(() => { (console.log("setinterval")); }, 2000)

// const timerID= setInterval(() => {console.log("set interval")}, 10000);


// clearInterval(timerID) // yaha pai id aati hai jab mai 141 line wale ko kisi variable mai lele like in line 144

// let a=1
// const variable=setInterval(()=> {console.log(a);a++;}, 1000)
// const timerID= setTimeout(() => {
    //     clearInterval(variable)
    // }, 10000)
    
    // const name = document.querySelector("#name")
    // const btn = document.querySelector(".btn")
    // const list = document.querySelector(".list")
    // btn.addEventListener("click", () => {
        // // we can also use if- else to statement to prevent agar mai kuch fill na bhi karu tab bhi enteries ho rahi hai usko rokne ke liye
        //     if(name.value===""){
            //         alert ("enter the name")
            //     }
            //// else{
                ////     const li = document.createElement("li")
                ////     const del = document.createElement("button")
                ////   del.innerText = "Delete"
                ////     li.innerText = name.value;                   // to add the input name as li item to the list
                ////    del.addEventListener("click", () => {        // to delete the particular li item on clicking delete button
                ////         list.removeChild(li)
                ////     })
                ////     li.appendChild(del)
                ////     list.appendChild(li)
                ////     name.value = ""
                //// }    
                //     const li = document.createElement("li")
                //     const del = document.createElement("button")
                //     del.innerText = "Delete"
//     li.innerText = name.value;                   // to add the input name as li item to the list
//     del.addEventListener("click", () => {        // to delete the particular li item on clicking delete button
//         list.removeChild(li)
//     })              
//     li.appendChild(del)
//     list.appendChild(li)
//     name.value = ""
// })


// console.log("first line")
// setTimeout(()=>{console.log("after 5 sec")},5000)
// console.log("secondline")


// function print(num) {
//     setTimeout(()=>{
//         console.log("inside print")
//         num()

//     },2000)
// }

// function sample() { // callback fn
//     console.log("inside callback")

// }
// print(sample)


// console.log("Starting homework...");

// setTimeout(() => {
//     console.log("Homework done!");
//     console.log("Starting dinner...");

//     setTimeout(() => {
//         console.log("Dinner done!");
//         console.log("Getting ready to go out...");

//         setTimeout(() => {
//             console.log("Going to the playground!");
//         }, 1000); // after dinner

//     }, 1500); // dinner time

//}, 2000); // homework time

// promise

// const p= new Promise ((res,rej) =>{
//     let done= true;
//     setTimeout(()=>{
//         if (done){
//             res({name:"Navya", age:90})
//         }else{
//             rej("world has been completed")
//         }
//         //reject
//     },5000)
// })
// p.then((data)=>{
//     console.log(data.name)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("finally block")
// })

// function doHomework(){
//     const p= new Promise((res,rej)=>{
//         let done= true;
//         setTimeout(()=>{
            
//         })
//     })
// }

// function doHomework(){

//}

function doHomework(){
    const p= new Promise((res,rej)=>{
        let done= true;
        setTimeout(()=>{
            if (done){
                console.log("homework done")
                res("homework to ho hi jata hai")
            }else{
                rej("homework nahi")
            }
        },3000)
    })
    return p    
}

function Dinner() {
    const p = new Promise((res, rej) => {
        let done = true;
        setTimeout(() => {
            if (done) {
                console.log("raat ka khana kaa liya")
                res("dinner is done")
            } else {
                rej("raat ka khana nahi khaya")
            }
        }, 3000)
    })
    return p   
}

function GoToPlayground() {
    const p = new Promise((res, rej) => {
        let done = true;
        setTimeout(() => {
            if (done) {
                console.log("going to playground")
                res("playground ja rahe hai")
            } else {
                rej("playground nahi ja rahe pata nahi kyu")
            }
        }, 3000)
    })
    return p   
}

doHomework(). then((data)=>{
    console.log(data)
}) .then((data)=>{
    console.log(data)
    return GoToPlayground()
}) . then ((data)=>{
    console.log(data)
}) .catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("sone jao na")
})
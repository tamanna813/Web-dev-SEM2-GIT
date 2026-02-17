// console.log("hello")

//     const click=document.getElementById("click")
//   const stop=document.getElementById("stop")

//   click.addEventListener("click", function () {
//     alert("Click button pressed!");})

//     stop.addEventListener("stop", function () {
//     alert("Stop button pressed!");})
// const clickBtn = document.getElementById("click");
// const stopBtn = document.getElementById("stop");


// // create text element
// const msg = document.createElement("p");
// msg.innerText = "Pressed";

// clickBtn.addEventListener("click", () => {
//   document.body.appendChild(msg);
// });

// stopBtn.addEventListener("click", () => {
//   msg.remove();
// });

// const div=document.querySelector('.container')
// const div2=document.querySelector('.outer')
// const btn=document.querySelector('button')


// div.addEventListener('click',()=>{console.log("Clicked the Div")},false)
// div2.addEventListener('click',()=>{console.log("Clicked the Outer Div")},false)
// btn.addEventListener('click',()=>{console.log("Clicked the Button")},false)
  
           // execution context is container in which javascripts run
           // js is single credit language 

// console.log(a)

//  var a=678
//  let b=567
//  console.log(a)
//  console.log(b)
 
//  function print(){
//         let c=63
//         console.log(c)
//         console.log("inside fn")

//  }
// print()

//  callstack/////////
// function first(){
//        second()
// }
// function second(){
//     third()
// }
// debugger
// function third(){
//     console.trace()
// }
// first()

// function infinte(){
//     infinte()

// }
// infinte()

// console.log(a) //////causes refernce error (TDZ)/////
// let a= 34567

// //////////UNIT 2//////////////
// ASYNCHRONOUS PROGRAMING IS time dependant
// console.log("first line")
// setTimeout(() => { console.log("after 2 sec")
    
// }, 2000);
// console.log("second line")
// const timerId=setInterval(()=>{
//     console.log("After 3 sec")
// },1000)
// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)

// let count=1
//  const timerid=setInterval(() => {
//     if (count===10)clearInterval(timerid)
//     console.log(count)
// count+=1
// }, 1000);


// console.log("before timeout")
// setTimeout(() => {.      // (this is callback function )
//     console.log("inside timeout ")
// }, 0)
// console.log("after timeout")

// function greet(){ //callback function will be the greet one 
//     console.log("hello students")
// }
// function print(sample, num){ //higher order function (jiske andr callback fn pass krre hai )
//     sample()
//     console.log("total students are", num)
// }
// print(greet, 45)


/////////////callback hell ///////////////////
// console.log("starting homework..");

// setTimeout(() => {
//     console.log("homework done!");
//     console.log("starting dinner..");

//      setTimeout(() => {
//         console.log("dinner done");
//         console.log("getting ready to go out");
//         setTimeout(() => {
//             console.log("going to the playground!");
            
//         }, 1000); //after dinner 
        
//      }, 1500);// dinner time 
    
// }, 2000); //homework time

//////////////////// hadling callback hell /////////////////
//  function finishHomework(callback){
//     console.log("starting homework....");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();

//  }, 2000);
// }

//  function eatDinner(callback){
// console.log("eating dinner");
// setTimeout(() => {
//     console.log("ate Dinner");
//     callback();
// }, 1500);
//  }

//  function goToPlayground(){
// console.log("going to playground");
//  }

//  finishHomework(()=>{
// eatDinner(()=>{
//     goToPlayground(()=> {

//     })

//    })

//  })




// const p=new Promise((resolve,reject)=>{ /////pending and rejected error create krta hai ////////
//     resolve("promise resolved")
// })
//////or///////
//  const p=new Promise((res,rej)=>{ 
//     res("promise resolved")
// })
 
// const p=new Promise((res, rej)=>{
// let done=false //or true 
// setTimeout(() => {
//     if(done){
//         res("work us done!")
//     }
//     else{
//         rej("work is not done")
//     }

// }, 5000);

// })
// p.then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("finally block") /////this will always there chaiye then hoga ya catch 
// })
// console.log(p)


////event loop very very imp

// console.log("first line")
// setTimeout(() => {
//     console.log("second line")
    
// }, 0);
// console.log("last line")
////////////////LEC15/////////////////////
function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Food ordered")
            res("Food has been ordered")
    
        }, 2000);
    })
}
function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Food prepared")
            res()
    
        }, 2000);
    })
}


function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Food Delivered")
            res()
        }, 2000);
    })
}
////only can use await when the function is async 
// async function order(){
//  const data=await orderFood()////////ye string return bhi krra hai ///////////
//  console.log(data)
// await prepareFood()
// await deliverFood()}
// FoodDeliver()

// orderFood().then((data)=>{
//     return prepareFood()
// }).then((data=>{
//     return deliverFood()
// })).then((data)=>{

// }).catch((err)=>{
//     console.log("somthing went wrong")
// })


//////////////lec16.

// console.log("First line")
// try{/////isme jo error dega
//     let sample=234
//     console.log(sample)
//     console.log("line after sample")

// }catch(e){//////isme jo error dega usko handle krne k liy 
//     console.log(e)

// }
// console.log("Last line")
////try catch ka use is used in backend s jb data managte hai 



// console.log("First line")
// try{
//     let age=16
//     if(age<18){
//         throw new Error("you not eligible to vote ")
//     }
// }catch(e){
//     console.warn(e)
//     // console.error(e)
// }
// console.log("last line")


async function getData(){
    const response=await fetch("https://dummyjson.com/products.")
    const data=await response.json()
    console.log(data.products[0].title)
    data.product.array.forEach((product)=>{
        console.log(product.title)

    })
        
}fetchdata()
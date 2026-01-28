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
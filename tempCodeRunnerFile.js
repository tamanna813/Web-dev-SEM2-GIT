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
//
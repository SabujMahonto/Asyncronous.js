console.log('first')
console.log('second')
// setInterval(()=>console.log('first'))
// let second = 0;
// const time = setInterval(()=>{
//     second++
//     console.log(second)
//     if(second >15){
//         clearInterval(time)
//     }
// })
// console.log('third')
let num = 0;
const count = setInterval(()=>{
    console.log(num++)
    if(num > 10){
    clearInterval(count)
    }
})
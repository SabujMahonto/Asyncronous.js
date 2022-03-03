const  doSomeThing = ()=>{
        console.log('I am new')
}

console.log('I am the first')
console.log('I am the second')
setTimeout(()=>{
    console.log('I am the boss')
},5000)
console.log('I am the fourth')
setTimeout(doSomeThing,4000)
console.log('I am the five')
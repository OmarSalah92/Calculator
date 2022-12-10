var myResult = document.querySelector('#put')

var myBtns = document.querySelectorAll('.sub-main .btn')

var myFinal = document.querySelector('.sub-main .btn-equal')

var myClear = document.querySelector('.sub-main #clear')

var myC = document.querySelector('.sub-main #c')

console.log(myFinal);


     



myBtns.forEach ((x)=>{

x.addEventListener('click',(e)=>{

   

    myResult.value += e.target.dataset.number

    


   
    })

})



  myFinal.addEventListener('click',()=>{

    

    if (myResult.value === '') {

        myResult.value = ''
        
    } else {
        myResult.value = eval (myResult.value)
    }

  })






myClear.addEventListener('click',()=>{

    myResult.value = ''
})

myC.addEventListener('click',()=>{

    myResult.value = ''
})


























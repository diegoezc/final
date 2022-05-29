(function(){
    const listElements = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('.menu_link');

       const addClick = ()=> {
           listElements.forEach (element =>{
               console.log('estoy dentro');
           })
       }

    addClick();
})
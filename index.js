let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let toggler = document.querySelector('.toggler')
let toggleContainer = document.querySelector('.toggle-container')
let keys = document.querySelectorAll('.button-container button');
let input = document.querySelector('.input');
let equal = document.querySelector('.equal-to');
let themes = ['first-theme','second-theme','third-theme']
let i;

one.addEventListener('click',()=>{
    i = 0;
 toggleContainer.classList.add('first')
 toggleContainer.classList.remove('second')
 toggleContainer.classList.remove('third')
    for (let theme of themes){
        document.body.classList.remove(theme)
    }
    document.body.classList.add(themes[i]);
   
})
two.addEventListener('click',()=>{
    i = 1;
 toggleContainer.classList.add('second')
 toggleContainer.classList.remove('first')
 toggleContainer.classList.remove('third')
    for (let theme of themes){
        document.body.classList.remove(theme)
    }
    document.body.classList.add(themes[i]);
})
three.addEventListener('click',()=>{
    i = 2;
 toggleContainer.classList.add('third')
 toggleContainer.classList.remove('first')
 toggleContainer.classList.remove('second')
    for (let theme of themes){
        document.body.classList.remove(theme)
    }
    document.body.classList.add(themes[i]);
})


keys.forEach(key =>{
    key.addEventListener('click',function(){ 
        let keyValue = this.textContent;
        switch (keyValue) {
            case 'x':
                input.textContent += '*'

                break;
            case 'RESET':
                input.textContent = '';
                    
                break;
               
            case '=':
                let output = eval(input.textContent); 
                input.textContent = output.toLocaleString('en');
       
                    
                break;
            case 'DEL':
                 input.textContent = input.textContent.slice(0,input.textContent.length-1) 
                
                break;
    
            default:
                input.textContent += (keyValue);
                
                break;
        }
    })
   
});

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let switchBackground = document.querySelector('nav button div')
let switchContainer = document.querySelector('nav button')
let keys = document.querySelectorAll('.button-container button');
let input = document.querySelector('.input');
let equal = document.querySelector('.equal-to');
let themes = ['first-theme','second-theme','third-theme']
let i;

one.addEventListener('click',()=>{
    i = 0;
    switchContainer.classList.add('first')
    switchContainer.classList.remove('second')
    switchContainer.classList.remove('third')
    for (let theme of themes){
        document.body.classList.remove(theme)
    }
    document.body.classList.add(themes[i]);
   
})
two.addEventListener('click',()=>{
    i = 1;
    switchContainer.classList.add('second')
    switchContainer.classList.remove('first')
    switchContainer.classList.remove('third')
    for (let theme of themes){
        document.body.classList.remove(theme)
    }
    document.body.classList.add(themes[i]);
})
three.addEventListener('click',()=>{
    i = 2;
    switchContainer.classList.add('third')
    switchContainer.classList.remove('first')
    switchContainer.classList.remove('second')
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
            case 'RESET':
                console.log('reset')
                
                break;
            default:
                input.textContent += (keyValue);
                
                break;
        }
    })
   
});

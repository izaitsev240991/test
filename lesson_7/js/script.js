let btn = document.querySelector('.btn'),
    btns = document.getElementsByTagName('button'),
    btn_block = document.querySelector('.btn-block');
btn_block.addEventListener('click', (event) =>{
    if(event.target && event.target.matches('button.first')){
     console.log('Hello!');   
    }
    
});


function myAnimation(){
    let elem = document.querySelector('.box'),
        pos = 0,
        id = setInterval(frame, 10);

        function frame(){
            if(pos == 300){
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
}

btn.addEventListener('click', myAnimation);
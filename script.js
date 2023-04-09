let string = ""
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (event)=>{
        if(event.target.innerHTML == '='){
            string = eval(string)

        }else{
        string += event.target.innerHTML;
        }
        document.querySelector('input').value = string
    })
})

let deletes = document.querySelector('.delete')
    deletes.addEventListener('click',(e)=>{
        string = string.substring(0,string.length-1)
        document.querySelector('input').value = string
    })

let clear = document.querySelector('.clear')
    clear.addEventListener('click',(e)=>{
        string = "";
        document.querySelector('input').value = string
    })
const info = document.querySelector('.info')
const instruction = document.querySelector('.instruction')

const allBoxes = document.querySelectorAll('.box')

const start = document.querySelector('.start')
const restart = document.querySelector('.restart')

const shadow = document.querySelector('.shadow')
const qMark = document.querySelector('.fa-solid')

const BtnClose = document.querySelector('.closeBtn')


const rules = () =>{
    instruction.style.left = '0';
    shadow.style.zIndex = '1';
   
}

const closeFun =()=>{
    instruction.style.left = '-1000px'
    shadow.style.zIndex = '-10000';
}


BtnClose.addEventListener('click', closeFun)
qMark.addEventListener('click', rules)
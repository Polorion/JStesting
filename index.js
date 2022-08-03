const btnUp = document.querySelector('.up-button')
const btnDown = document.querySelector('.down-button')

const slide = document.querySelector('.sidebar')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

let activeSlide = 0
const slideLength = sidebar.querySelectorAll('div').length
slide.style.top=`-${(slideLength-1)*100}vh`



btnUp.addEventListener('click',()=>{
    slideRun('up')
})

btnDown.addEventListener('click',()=>{
    slideRun('down')
})

const slideRun = (move)=>{
    if(move==='up'){
        activeSlide++
        if(activeSlide===slideLength ){
            activeSlide=0
        }
    }
    else if(move==='down'){
        console.log(1)
        activeSlide--

        if(activeSlide<0){
            activeSlide=slideLength-1
        }
    }
    const heigthContainer = document.querySelector('.container').clientHeight

    slide.style.transform=`translateY(${activeSlide* heigthContainer}px)`
    mainSlide.style.transform=`translateY(-${activeSlide* heigthContainer}px)`
}



//////////////first

document.querySelectorAll('.slide-one').forEach(el=>{
    el.addEventListener('click',()=>{
        if(el.classList.contains('active-one')){
            el.classList.remove('active-one')
        }else{
            resetActive()
            el.classList.add('active-one')
        }
    })
})

const resetActive=()=>{
    document.querySelectorAll('.slide').forEach(el=>{
        el.classList.remove('active-one')
    })
}

/////////////second

const itemTwo = document.querySelector('.item-two')
document.querySelectorAll('.placeholder-two').forEach(el=>{

    el.addEventListener('dragover',(e)=>{
        e.preventDefault()
    })
    el.addEventListener('dragenter',(e)=>{
        e.target.classList.add('hover-two')
    })
    el.addEventListener('dragleave',(e)=>{
        e.target.classList.remove('hover-two')
    })
    el.addEventListener('drop',(e)=>{
        e.target.classList.remove('hover-two')
        e.target.append(itemTwo)
    })
})

itemTwo.addEventListener('dragstart',(e)=>{

    e.target.classList.add('move-two')
    setTimeout(()=>{
        e.target.classList.add('hide-two')

    },0)
})

itemTwo.addEventListener('dragend',(e)=>{
    e.target.classList.remove('move-two','hide-two')
})



////////////////////three

const BOXES_NUMBER = 299

const boardThree = document.querySelector('#boardThree')
console.log(boardThree)

const colorsThree = ['#48d914','#fa2f44','#96bd09','#618bff','#f36eff']
for(i=0;i<BOXES_NUMBER;i++){

    const box = document.createElement('div')
    box.classList.add('box-three')
    boardThree.append(box)
    box.addEventListener('mouseover',()=>{
        const color = randomColor()
        box.style.background = color
        box.style.boxShadow = `0 0 2px ${color},0px 0px 10px ${color}`
    })
    box.addEventListener('mouseleave',()=>{
        box.style.background = '#0d180d'
        box.style.boxShadow = `0 0 40px rgba(255, 7, 7, 0.2) inset`
    })
}


const randomColor=()=>{
    let color = Math.floor(Math.random()*colorsThree.length)

    return colorsThree[color]
}



////////////four



    const boardFour = document.querySelector('#boardFour')
const dataBoard = boardFour.getBoundingClientRect()
const colorsFour=['#f8ff33','#97ff05','#2fa30f','#07f59a','#0e47f0']
const sreensFour = document.querySelectorAll('.screen-four')
sreensFour[0].addEventListener('click',(e)=>{
    if(e.target.classList.contains('start-four')){
        sreensFour[0].classList.add('up')
    }
})
let times ;
sreensFour[1].addEventListener('click',(e)=>{
    if(e.target.classList.contains('time-btn-four')){
        times=e.target.textContent.split(' ')[0]
        sreensFour[1].classList.add('up')
        times.textContent = `00:${times}`
        setInterval(()=>{
            times--
            if(times===0){
                time.parentNode.style.opacity='0'
                boardFour.innerHTML=`<div class="scoreAll">SCRORE :<p class="score">${count}</p> </div>`
            }
            if(times<10){
                times = `0${times}`
                console.log(times)
            }
            time.textContent = `00:${times}`

        },1000)

    }
})

let count = 0
const time = document.querySelector('#timeFour')

const randomColorFour = ()=>{
    return randomNumber(0,colorsFour.length)
}

const createCircle = ()=>{
    const circle = document.createElement('div')
    const y = dataBoard.height
    const x = dataBoard.width
    const size = randomNumber(10,50)
    circle.style.background = `${colorsFour[randomColorFour()]}`

    circle.classList.add('circle-four')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${randomNumber(1,y-size)}px`
    circle.style.left = `${randomNumber(1,x-size)}px`
    circle.addEventListener('click',()=>{
        count++
        circle.remove()
        createCircle()

    })
    boardFour.append(circle)
}

const randomNumber=(min,max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
createCircle()



const playerImg = document.querySelector('.player img')
const cpuImg = document.querySelector('.cpu img')
const start = document.getElementById('start')
const playerText = document.getElementById('playerText')
const cpuText = document.getElementById('cpuText')

const headerAlert = document.querySelector('.winOrLose')

const playerScore = document.querySelector('.playerScore')
const cpuScore = document.querySelector('.cpuScore')
let pscore = 0;
let cscore = 0;
playerScore.textContent = pscore;
cpuScore.textContent = cscore;

function startBtn(){
start.addEventListener('click', btn)

}
startBtn()

function btn(){
    player()
    cpu()
    setTimeout(function(){
        winOrLose()
        scorePlus()
    },2000)
    
}
function player(){
    let random = Math.floor(Math.random()* 3)
    let playerInterval = setInterval(function(){
        playerImg.classList.add('playerAnimation')
        playerImg.src = 'img/rock.png'
        playerText.textContent = ""
    },1)
    
    setTimeout(function(){
        switch(random){
            case 0:
                playerImg.src = 'img/rock.png'
                playerText.textContent = 'Rock'
                playerImg.id = 0
                break;
            case 1:
                playerImg.src = 'img/paper.png'
                playerText.textContent = 'Paper'
                playerImg.id = 1
                break;
            case 2:
                playerImg.src = 'img/scissor.png'
                playerText.textContent = 'Scissor'
                playerImg.id = 2
                break;
                
        }
        playerImg.classList.remove('playerAnimation')
        clearInterval(playerInterval)
    },2000)
    console.log(playerImg.src)
    console.log(cpuImg.src)
}

function cpu(){
    let random = Math.floor(Math.random()* 3)
    let cpuInterval = setInterval(function(){
        cpuImg.classList.add('cpuAnimation')
        cpuImg.src = 'img/rock.png'
        cpuText.textContent = ""
    },1)
    
    setTimeout(function(){
        switch(random){
            case 0:
                cpuImg.src = 'img/rock.png'
                cpuText.textContent = 'Rock'
                cpuImg.id = 0
                break;
            case 1:
                cpuImg.src = 'img/paper.png'
                cpuText.textContent = 'Paper'
                cpuImg.id = 1
                break;
            case 2:
                cpuImg.src = 'img/scissor.png'
                cpuText.textContent = 'Scissor'
                cpuImg.id = 2
                break;
                
        }
        cpuImg.classList.remove('cpuAnimation')
        clearInterval(cpuInterval)
    },2000)
}

function winOrLose(){
    if(playerImg.id == cpuImg.id){
        headerAlert.textContent = 'Draw'
    }else if(cpuImg.id == 2){
        playerImg.id == 0 ? headerAlert.textContent = 'You Win' : headerAlert.textContent = 'CPU Win'
        
    }else if(cpuImg.id == 1){
        playerImg.id == 2 ? headerAlert.textContent = 'You Win' : headerAlert.textContent = 'CPU Win'
        
    }else if(cpuImg.id == 0){
        playerImg.id == 1 ? headerAlert.textContent = 'You Win' : headerAlert.textContent = 'CPU Win'
        
    }   
}

function scorePlus(){
    if(playerImg.id == cpuImg.id){
        headerAlert.textContent = 'Draw'
    }else if(cpuImg.id == 2){
        playerImg.id == 0 ? playerScore.innerText = pscore += 1: playerScore.innerText = cscore += 1
        
    }else if(cpuImg.id == 1){
        playerImg.id == 2 ? playerScore.innerText = pscore += 1: playerScore.innerText = cscore += 1
        
    }else if(cpuImg.id == 0){
        playerImg.id == 1 ? playerScore.innerText = pscore += 1: playerScore.innerText = cscore += 1
        
    }
    playerScore.innerText = pscore;
    cpuScore.innerText = cscore;
}
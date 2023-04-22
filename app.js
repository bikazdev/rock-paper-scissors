const playerImg = document.querySelector('.player .playerSelect')
const playerSelection = document.querySelectorAll('#playerSelection img')
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
let playerTimeOut;

let isTrue = true;


function startBtn() {
    // Random start button
    start.addEventListener('click', btn)
    
    // We loop over the photos to select them
    playerSelection.forEach(function (e, i) {

        // Attributing presentation indexes as IDs
        e.id = i

        // Player selection (Rock - Paper - Scissor)
        e.addEventListener('click', function (element) {
            let el = element.target
            playerImg.id = el.id

            // A condition to check the similarity between the player's choice and the computer's randomness
            if(el) {
                /* By setTimeOut, we animate them before the result, we turn the photos into stone
                We empty the content  */
                let animationTimeOut = setTimeout(function () {
                    playerImg.src = 'img/rock.png'
                    playerImg.classList.add('playerAnimation')
                    playerText.textContent = ''
                    cpuImg.classList.add('cpuAnimation')
                    cpuImg.src = 'img/rock.png'
                    cpuText.textContent = ""
                    isTrue = false;

                }, 1)

                // After 2000 milliseconds, we delete the animation by setTimeOut
                setTimeout(function () {
                    playerImg.src = el.src
                    clearTimeout(animationTimeOut)
                    playerImg.classList.remove('playerAnimation')
                    cpuImg.classList.remove('cpuAnimation')
                    isTrue = true

                    // Between the numbers 1 to 3, we number each of the photos in order using the random method to run them through the switch.
                    let random = Math.floor(Math.random() * 3)
                    switch (random) {
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

                    // The condition of the result of this game and its printing
                    if (el.id == cpuImg.id) {
                        headerAlert.textContent = 'Draw'
                    } else if (cpuImg.id == 2) {
                        el.id == 0 ? headerAlert.textContent = 'You Win' : headerAlert.textContent = 'CPU Win'
                        el.id == 0 ? playerScore.innerText = pscore += 1 : playerScore.innerText = cscore += 1
                    } else if (cpuImg.id == 1) {
                        el.id == 2 ? headerAlert.textContent = 'You Win' : headerAlert.textContent = 'CPU Win'
                        el.id == 2 ? playerScore.innerText = pscore += 1 : playerScore.innerText = cscore += 1
                    } else if (cpuImg.id == 0) {
                        el.id == 1 ? headerAlert.textContent = 'You Win' : headerAlert.textContent = 'CPU Win'
                        el.id == 1 ? playerScore.innerText = pscore += 1 : playerScore.innerText = cscore += 1
                    };

                    playerScore.innerText = pscore;
                    cpuScore.innerText = cscore;

                    switch (playerImg.id) {
                        case '0':
                            playerText.textContent = 'Rock'
                            break;
                        case '1':
                            playerText.textContent = 'Papper'
                            break;
                        case '2':
                            playerText.textContent = 'Scissor'
                            break;

                    }

                }, 2000)
            }

        })
    })
}
startBtn()



function btn() {
    player()
    cpu()
    // Due to the use of hand animation, the result is placed in setTimeout
    setTimeout(function () {
        winOrLose()

    }, 2000)
    
}

//The commands below are similar to the commands above, only a few variables have changed
function player() {
    let random = Math.floor(Math.random() * 3)
    playerTimeOut = setTimeout(function () {
        playerImg.classList.add('playerAnimation')
        playerImg.src = 'img/rock.png'
        playerText.textContent = ""
        isTrue = false
    }, 1)
    if(isTrue){
        setTimeout(function () {
            switch (random) {
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
            clearTimeout(playerTimeOut)
        }, 2000)

    }

}

function cpu() {
    let random = Math.floor(Math.random() * 3)
    let cpuTimeOut = setTimeout(function () {
        cpuImg.classList.add('cpuAnimation')
        cpuImg.src = 'img/rock.png'
        cpuText.textContent = ""
        
    }, 1)

    setTimeout(function () {
        
        switch (random) {
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
        clearTimeout(cpuTimeOut)
    }, 2000)
}

function winOrLose() {
    if (playerImg.id == cpuImg.id) {
        headerAlert.textContent = 'Draw'
    } else if (cpuImg.id == 2) {
        playerImg.id == 0 ? headerAlert.textContent = 'You Win' : headerAlert.textContent = 'CPU Win'
        playerImg.id == 0 ? playerScore.innerText = pscore += 1 : playerScore.innerText = cscore += 1
    } else if (cpuImg.id == 1) {
        playerImg.id == 2 ? headerAlert.textContent = 'You Win' : headerAlert.textContent = 'CPU Win'
        playerImg.id == 2 ? playerScore.innerText = pscore += 1 : playerScore.innerText = cscore += 1
    } else if (cpuImg.id == 0) {
        playerImg.id == 1 ? headerAlert.textContent = 'You Win' : headerAlert.textContent = 'CPU Win'
        playerImg.id == 1 ? playerScore.innerText = pscore += 1 : playerScore.innerText = cscore += 1
    }
    playerScore.innerText = pscore;
    cpuScore.innerText = cscore;
}
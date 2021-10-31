let order = []
let clickedOrder = []
let score = 0

// 0 => Nam
// 1 => Abdul
// 2 => Hun
// 3 => Byeok

const Nam = document.querySelector('.Nam')
const Abdul = document.querySelector('.Abdul')
const Hun = document.querySelector('.Hun')
const Byeok = document.querySelector('.Byeok')
// inicia ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

// ascende a próxima cor
let lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)
  setTimeout(() => {
    element.classList.remove('selected')
  })
}

// checa se os botões são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver()
      break
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`pontuação: ${score}\n você acertou! Iniciando próximo nível`)
    nextLevel()
  }
}

// função para o click do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250)
}

//função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return Nam
  } else if (color == 1) {
    return Abdul
  } else if (color == 2) {
    return Hun
  } else if (color == 3) {
    return Byeok
  }
}

//função para proximo nivel do jogo
let nextLevel = () => {
  score++
  shuffleOrder()
}

// função para game over
let gameOver = () => {
  alert(
    `Pontuação: ${score}!\n você perdeu o jogo\n clique em ok para iniciar um novo jogo`
  )
  order = []
  clickedOrder = []

  playGame()
}

// função de inicio do jogo
let playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!')
  score = 0

  nextLevel()
}

Nam.addEventListener('click', click(0))
Abdul.addEventListener('click', click(1))
Hun.addEventListener('click', click(2))
Byeok.addEventListener('click', click(3))

// eventos de clique para o jogo
Nam.onclick = () => click(0)
Abdul.onclick = () => click(1)
Hun.onclick = () => click(2)
Byeok.onclick = () => click(3)

//inicio do jogo
playGame()

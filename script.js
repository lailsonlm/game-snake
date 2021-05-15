// Criação do BG
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 16;
let sizeContext = 32
// Criação da Cobrinha
let snake = [];
snake[0] = {
    x: 16 * box,
    y: 16 * box
}

// Direção
let direction = "right"


function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, sizeContext * box, sizeContext * box);
}

function createSnake() {
    for(let i = 0; i < snake.length; i++) {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

// Definir direção
document.addEventListener('keydown', update);

function update(event) {
    if(event.code == "ArrowLeft" && direction != "right") {
        direction = "left";
    } else if(event.code == "ArrowUp" && direction != "down") {
        direction = "up";
    } else if(event.code == "ArrowRight" && direction != "left") {
        direction = "right";
    } else if(event.code == "ArrowDown" && direction != "up") {
        direction = "down";
    }

}

//Definir Movimentos
function snakeMovements() {
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") {
        snakeX += box;
    } else if(direction == "left") {
        snakeX -= box;
    } else if(direction == "up") {
        snakeY -= box;
    } else if(direction == "down") {
        snakeY += box;
    }

    // Remover o último elemento do array
    snake.pop();

    // Adiciona um elemento no início do array
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

// Definir limitador de tela para cobrir. Se ultrapassar ela retorna do lado oposto
function canvasLimit() {
    if(snake[0].x > sizeContext * box && direction =="right") {
        snake[0].x = 0;
    } else if(snake[0].x < 0 && direction =="left") {
        snake[0].x = sizeContext * box;
    } else if(snake[0].y > sizeContext * box && direction=="down") {
        snake[0].y = 0;
    } else if(snake[0].y < 0 && direction == "up") {
        snake[0].y = sizeContext * box;
    }
}

// Iniciar Jogo
function startGame() {
    createBG()
    createSnake()
    snakeMovements()
    canvasLimit()
}


// Rodar a função startGame a cada 100ms
let game = setInterval(startGame, 100)



// Criação do BG
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 16;

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
    context.fillRect(0, 0, 32 * box, 32 * box);
}

function createSnake() {
    for(let i = 0; i < snake.length; i++) {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function startGame() {
    createBG()
    createSnake()

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

    //"Fazer a cobrinha andar"
    
    // Remover o último elemento do array
    snake.pop();

    // Adiciona um elemento no início do array
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

// Rodar a função startGame a cada 100ms
let game = setInterval(startGame, 100)



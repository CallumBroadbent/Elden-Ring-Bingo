let buttonState = false;
let player = false;
let loadedJSON = [];

//This gets the select tag element from the HTML
const PlayerSelection = document.getElementById("Player_Selection");

//When the player selects something different on the drop down this will update when something is changed
PlayerSelection.addEventListener("change", PlayerChoice);

function PlayerChoice (pSelection) {
    const currentValue = pSelection.target.value;
    if (currentValue == "Player1"){
        player = false
    }else if (currentValue == "Player2"){
        player = true
    }
    console.log(currentValue);
}

//Loads the json file into an array
    async function mainBingoBoard() {
        const bingoSquares  = await getData();
       // console.log(bingoSquares);

        for (let i = 0; i < bingoSquares.length; i++){
            loadedJSON.push(bingoSquares[i].name);
        }

        let bingoBoardGen = randomize(loadedJSON);

        //console.log(bingoBoardGen[0])

        document.querySelector('#button_0').textContent = bingoBoardGen[0];
        document.querySelector('#button_1').textContent = bingoBoardGen[1];
        document.querySelector('#button_2').textContent = bingoBoardGen[2];
        document.querySelector('#button_3').textContent = bingoBoardGen[3];
        document.querySelector('#button_4').textContent = bingoBoardGen[4];
        document.querySelector('#button_5').textContent = bingoBoardGen[5];
        document.querySelector('#button_6').textContent = bingoBoardGen[6];
        document.querySelector('#button_7').textContent = bingoBoardGen[7];
        document.querySelector('#button_8').textContent = bingoBoardGen[8];
        document.querySelector('#button_9').textContent = bingoBoardGen[9];
        document.querySelector('#button_10').textContent = bingoBoardGen[10];
        document.querySelector('#button_11').textContent = bingoBoardGen[11];
        document.querySelector('#button_12').textContent = bingoBoardGen[12];
        document.querySelector('#button_13').textContent = bingoBoardGen[13];
        document.querySelector('#button_14').textContent = bingoBoardGen[14];
        document.querySelector('#button_15').textContent = bingoBoardGen[15];
        document.querySelector('#button_16').textContent = bingoBoardGen[16];
        document.querySelector('#button_17').textContent = bingoBoardGen[17];
        document.querySelector('#button_18').textContent = bingoBoardGen[18];
        document.querySelector('#button_19').textContent = bingoBoardGen[19];
        document.querySelector('#button_20').textContent = bingoBoardGen[20];
        document.querySelector('#button_21').textContent = bingoBoardGen[21];
        document.querySelector('#button_22').textContent = bingoBoardGen[22];
        document.querySelector('#button_23').textContent = bingoBoardGen[23];
        document.querySelector('#button_24').textContent = bingoBoardGen[24];

//this is to randomize the board
        function randomize(array) {
            let newBoard = [];
            let usedIndexes = [];

            let i = 0;
            while (i < array.length) {

                let randomNumber = Math.floor(Math.random() * array.length);

                if (!usedIndexes.includes(randomNumber)) {
                    newBoard.push(array[randomNumber]);
                    usedIndexes.push(randomNumber);
                    i++;
                }
            }
            //console.log(newBoard);
            return newBoard;
        }

    }

    async function getData() {
        const res = await fetch("bingo-brawlers-season2.json");
        const data = await res.json();

        return data;
    }

    mainBingoBoard();
    

//Gets the button element from the HTML
const button0 = document.getElementById("button_0");

//Handles when the user clicks on the button
button0.onclick = () => {
    buttonState = !buttonState;
    console.log("The buttons state is " + buttonState);
    console.log("The player is " + player);
    updateButton0();
}

//The function to mark a square on the bingo board
const updateButton0 = () => {
    if (buttonState == true && player == false) {
        button0.style.backgroundColor = "aqua";
    }else if (buttonState == true && player == true){
        button0.style.backgroundColor = "Pink";
    }
    else {
        button0.style.backgroundColor = "";
    }
}

const button1 = document.getElementById("button_1");

//Handles when the user clicks on the button
button1.onclick = () => {
    buttonState = !buttonState;
    console.log("The buttons state is " + buttonState);
    console.log("The player is " + player);
    updateButton1();
}

//The function to mark a square on the bingo board
const updateButton1 = () => {
    if (buttonState == true && player == false) {
        button1.style.backgroundColor = "aqua";
    }else if (buttonState == true && player == true){
        button1.style.backgroundColor = "Pink";
    }
    else {
        button1.style.backgroundColor = "";
    }
}

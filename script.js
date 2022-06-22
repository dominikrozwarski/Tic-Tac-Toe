const questionMark = document.querySelector('.fa-solid');
const info = document.querySelector('.info');
const invisible = document.querySelector('.invisible');
const shadow = document.querySelector('.shadow');

const closeBtn = document.querySelector('.closeBtn');
const restartBtn = document.querySelector('.restartBtn');
const swapBtn = document.querySelector('.swapBtn');
const boxes = document.querySelectorAll('.box');
const mainSide = document.querySelector('.position');
const winnerOfTheGame = document.querySelector('.winner');

let a = 0;
let who;

let winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

let board = [[''], [''], [''], [''], [''], [''], [''], [''], ['']];

// console.log(board);

const fillingBoxes = () => {
	for (let i = 0; i < boxes.length; i++) {
		board[i] = boxes[i].innerHTML;
	}
	winner();
};
//filling boxes of board to compare it with winning condition after

const winner = () => {
	for (let i = 0; i < winningConditions.length; i++) {
		let win = winningConditions[i];
		let a = board[win[0]];
		let b = board[win[1]];
		let c = board[win[2]];
		if (a != '' && a == b && b == c) {
			showWinner();
		}
	}
};

//checking if winner condition appeard

const showWinner = () => {
	winnerOfTheGame.textContent = `winner ${who}`;
	winnerOfTheGame.style.zIndex = 100;
	shadow.style.zIndex = 99;
};

//displaying window with the winner

const whoesRound = () => {
	if (a % 2 != 0) {
		who = 'X';
	} else {
		who = 'O';
	}
	a++;
};

const showInfo = () => {
	invisible.style.zIndex = 10;
	shadow.style.zIndex = 8;
	restartBtn.style.zIndex = 1;
};

//showing window with info: how to play a game

const closeInfo = () => {
	invisible.style.zIndex = -1;
	shadow.style.zIndex = -1;
	restartBtn.style.zIndex = 1000;
};
//closing info window

for (let i of boxes) {
	i.addEventListener('click', function () {
		whoesRound();
		if (this.innerHTML != '') {
			whoesRound();
		} else {
			this.innerHTML = `${who}`;

			fillingBoxes();
		}
	});
}
//filling boxes with proper sign

const restartGame = () => {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = '';
		board[i].innerHTML = '';
		a = 0;
	}
	shadow.style.zIndex = -100;
	winnerOfTheGame.style.zIndex = -100;
};
//reseting game to starting values

questionMark.addEventListener('click', showInfo);
closeBtn.addEventListener('click', closeInfo);
restartBtn.addEventListener('click', restartGame);

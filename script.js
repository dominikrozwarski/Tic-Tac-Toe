const questionMark = document.querySelector('.fa-solid');
const info = document.querySelector('.info');
const invisible = document.querySelector('.invisible');
const shadow = document.querySelector('.shadow');

const closeBtn = document.querySelector('.closeBtn');
const restartBtn = document.querySelector('.restartBtn');
const swapBtn = document.querySelector('.swapBtn');
const boxes = document.querySelectorAll('.box');
const mainSide = document.querySelector('.position');

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

const winner = () => {
	


}


const whoesRound = () => {
	if (a % 2 != 0) {
		who = 'X';
	} else {
		who = 'O';
	}
	a++;
};

const showInfo = () => {
	invisible.style.zIndex = '10';
	shadow.style.zIndex = '8';
};

const closeInfo = () => {
	invisible.style.zIndex = '-1';
	shadow.style.zIndex = '-1';
};

for (let i of boxes) {
	i.addEventListener('click', function () {
		whoesRound();
		if (this.innerHTML != '') {
			whoesRound();
		} else {
			this.innerHTML = `${who}`;
			winner();
		}
	});
}

const restartGame = () => {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = '';
		a = 0;
	}
};

questionMark.addEventListener('click', showInfo);
closeBtn.addEventListener('click', closeInfo);
restartBtn.addEventListener('click', restartGame);

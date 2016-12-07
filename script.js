
var col = function () {return Math.floor(Math.random()*256)};
var colors = [];

// determine random colors
for(i=0;i<6;i++) {
colors[i]= 'rgb('+col()+', '+col()+', '+col()+')'
};

// select color to guess
var pickedColor = colors[Math.floor(Math.random()*colors.length)];
//select all squares
var squares = document.querySelectorAll('.square');
var colorChoice=document.querySelector('span');
colorChoice.textContent=pickedColor;


for(i=0;i<colors.length;i++) {
	// asign a color to a square
	squares[i].style.background=colors[i];
	// add event listener
	squares[i].addEventListener('click',function() {
		console.log(this.style.background);
		console.log(pickedColor);
	// check press
	if(this.style.background==pickedColor) {
		document.querySelector('p').textContent='correct';
		document.querySelector('h1').style.background=pickedColor;

		for(k=0;k<colors.length;k++) {
		squares[k].style.background=pickedColor;	
		}
	} else {
		this.style.background='#222222';
		document.querySelector('p').textContent='try again';
	}
	})
};


const z = document.querySelector('.z'),
	x = document.querySelector('.x'),
	c = document.querySelector('.c'),
	v = document.querySelector('.v'),
	b = document.querySelector('.b'),
	n = document.querySelector('.n'),
	m = document.querySelector('.m'),
	space = document.querySelector('.space');

var drum = {
	kick: new Audio('https://raw.githubusercontent.com/nel-co/drum-kit/master/audio/Kick.wav'),
	snare: new Audio('https://raw.githubusercontent.com/nel-co/drum-kit/master/audio/Snare.wav'),
	lTom: new Audio('https://raw.githubusercontent.com/nel-co/drum-kit/master/audio/l-tom.wav'),
	mTom: new Audio('https://raw.githubusercontent.com/nel-co/drum-kit/master/audio/m-tom.wav'),
	sTom: new Audio('https://raw.githubusercontent.com/nel-co/drum-kit/master/audio/s-tom.wav'),
	hiHat: new Audio('https://raw.githubusercontent.com/nel-co/drum-kit/master/audio/hat.wav'),
	crash: new Audio('https://raw.githubusercontent.com/nel-co/drum-kit/master/audio/Crash.wav'),
	scratch: new Audio('https://raw.githubusercontent.com/nel-co/drum-kit/master/audio/Scratch.mp3')
};

// Disables text highlights
document.addEventListener('mousedown', function (e) {
	e.preventDefault();
}, false);

// Removes animation class onkeyup
document.onkeyup = function (e) {
	[].map.call(document.querySelectorAll('.btn'), function (e) {
		e.classList.remove('animate');
	})
}

// Simulates clicks on key down
document.onkeydown = function (e) {
	switch (e.keyCode) {
		case 90:
			z.click();
			z.classList.toggle('animate');
			break;
		case 88:
			x.click();
			x.classList.toggle('animate');
			break;
		case 67:
			c.click();
			c.classList.toggle('animate');
			break;
		case 86:
			v.click();
			v.classList.toggle('animate');
			break;
		case 66:
			b.click();
			b.classList.toggle('animate');
			break;
		case 78:
			n.click();
			n.classList.toggle('animate');
			break;
		case 77:
			m.click();
			m.classList.toggle('animate');
			break;
		case 32:
			space.click();
			space.classList.toggle('animate');
			break;
	}
};

// Click Events
z.addEventListener('click', function () {
	drum.kick.play();
	drum.kick.currentTime = 0;
})

x.addEventListener('click', function () {
	drum.snare.play();
	drum.snare.currentTime = 0;
})

c.addEventListener('click', function () {
	drum.lTom.play();
	drum.lTom.currentTime = 0;
})

v.addEventListener('click', function () {
	drum.mTom.play();
	drum.mTom.currentTime = 0;
})

b.addEventListener('click', function () {
	drum.sTom.play();
	drum.sTom.currentTime = 0;
})

n.addEventListener('click', function () {
	drum.hiHat.play();
	drum.hiHat.currentTime = 0;
})

m.addEventListener('click', function () {
	drum.crash.play();
	drum.crash.currentTime = 0;
})

space.addEventListener('click', function () {
	drum.scratch.play();
	drum.scratch.currentTime = 0;
})
// (function () {

// 	// var banner = document.createElement('div')
// 	// banner.id = 'fight215-banner';



// 	// 	content = document.createElement('div'),
// 	// 	eye = document.createElement('img');

// 	// var elements = {
// 	// 	box: 'position: absolute; padding-bottom: 50px; top: 0px; left: 0px; line-height: 50px; z-index: 666; font-size: 16px; width: 100%; height: 50px; text-align: center; border: 0; margin: 0; padding: 0; background: url('+bg+') repeat',
// 	// 	eye: 'width: 60px; height: auto; margin-top: 5px; margin-left: 5%; float: left;',
// 	// 	content: 'width: 100%; line-height: 50px; font-family: \'Roboto-Regular\'',
// 	// };

// 	// var wrapper = document.createElement('div');
// 	// wrapper.id = 'fight215-wrapper';

// 	// while(document.body.firstChild) {
// 	// 	wrapper.appendChild(document.body.firstChild);
// 	// }
// 	// document.body.appendChild(wrapper);

// 	// var mainStyle = document.createElement('link');
// 	// mainStyle.rel = 'stylesheet';
// 	// mainStyle.type = 'text/css';
// 	// mainStyle.href = 'https://www.fight215.org/count/styles/main.min.css';
// 	// document.head.appendChild(mainStyle);

// 	// var fontStyle = document.createElement('link');
// 	// fontStyle.rel = 'stylesheet';
// 	// fontStyle.type = 'text/css';
// 	// fontStyle.href = 'https://www.fight215.org/count/styles/fonts.min.css';
// 	// document.head.appendChild(fontStyle);

// 	// var iframe = document.createElement('iframe');
// 	// iframe.src = 'https://www.fight215.org/count/index.html';
// 	// iframe.width = '100%';
// 	// iframe.height = '50px';
// 	// iframe.frameBorder = '0';

// 	// document.body.appendChild(iframe);

// 	// var banner = document.createElement('div');
// 	// banner.id = 'fight215-banner';

// 	// var div1 = document.createElement('div');
// 	// banner.appendChild(div1);

// 	// var eye = document.createElement('img');
// 	// eye.src = 'https://www.fight215.org/count/images/215-eye.png';
// 	// div1.appendChild(eye);

// 	// var div2 = document.createElement('div');
// 	// banner.appendChild(div2);


// 	// var p = document.createElement('p');
// 	// p.id = 'fight215-timer';
// 	// div2.appendChild(p);

// 	// var div3 = document.createElement('div');
// 	// banner.appendChild(div3);

// 	// var speak = document.createTextNode('Speak out.');
// 	// div3.appendChild(speak);


	


// 	// banner.setAttribute('style', elements.box);
// 	// eye.setAttribute('style', elements.eye);
// 	// banner.appendChild(eye);
// 	// content.setAttribute('style', elements.content);


// 	// var mq = window.matchMedia('screen and (min-width: 768px)');
// 	// mq.addListener(widthChange);

// 	// function widthChange(mq) {
// 	// 	 if (mq.matches) {
// 	//         content.style.fontSize = '16px';
// 	//         content.style.paddingTop = '0px';
// 	//         content.style.lineHeight = '50px';
// 	//     } else {
// 	//     	content.style.fontSize = '12px';
// 	//     	content.style.paddingTop = '12px';
// 	//     	content.style.lineHeight = '12px';
// 	//     }
// 	// }

// 	// banner.appendChild(content);
// 	// document.body.appendChild(banner);

// 	var box = {
// 		days: document.getElementById('days'),
// 		hours: document.getElementById('hours'),
// 		minutes: document.getElementById('minutes'),
// 		seconds: document.getElementById('seconds')
// 	};


// 	document.getElementById('fight215-banner').onclick = function() {
// 		top.location.href = 'https://www.fight215.org/';

// 	};

// 	var now = new Date().getTime();
// 	var then = new Date("Sun Jun 1 2015 00:00:00 GMT-0400 (EDT)").getTime();
// 	var distance = (then - now) / 1000;

// 	var direction = 'down';

// 	if(distance <= 0) {
// 		direction = 'up';
// 		distance = (now - then) / 1000;
// 		document.getElementsByTagName('p')[0].innerHTML = "Free from Section 215 of the Patriot Act";
// 	}


// 	var seconds = distance;




// 	function timer() {
// 	    var days        = Math.floor(seconds/24/60/60),
// 	        hoursLeft   = Math.floor((seconds) - (days*86400)),
// 	    	hours       = Math.floor(hoursLeft/3600),
// 	    	minutesLeft = Math.floor((hoursLeft) - (hours*3600)),
// 	    	minutes     = Math.floor(minutesLeft/60),
// 	    	remainingSeconds = Math.floor(seconds % 60);



// 	    if (direction === 'down') {
// 		    seconds--;
// 		} else {
// 			seconds++;
// 		}

//     	days = pad(days);
// 	    hours = pad(hours);
// 	    minutes = pad(minutes);
// 	    remainingSeconds = pad(remainingSeconds);
	    
// 		box.days.innerHTML = days;
// 	    box.hours.innerHTML = hours;
// 	    box.minutes.innerHTML = minutes;
// 	    box.seconds.innerHTML = remainingSeconds;


// 	}

// 	function pad(number) {
// 	  if (number<10) { number = "0" + number; }
// 	  return number;
// 	}

// 	timer();
// 	setInterval(timer, 1000);

// 	document.addEventListener("DOMContentLoaded", function(event) { 
// 		document.getElementById('fight215-banner').classList.add('active');
// 	});



// })();
var vid,playbtn,currentTimeText,durationTimeText;
function initializePlayer(){
	//set object references
	vid = document.getElementById('my_video');
	playbtn = document.getElementById('playpausebtn');
	seekslider = document.getElementById('seekslider');
	currentTimeText = document.getElementById('currentTimeText');
	durationTimeText = document.getElementById('durationTimeText');

	//add event listeners 
	playbtn.addEventListener('click',playPause,false);
	seekslider.addEventListener('change',vidSeek,false);
	vid.addEventListener('timeupdate',seekTimeUpdate,false);
}

window.onload = initializePlayer;

function playPause() {
	if(vid.paused){
		vid.play();
		playbtn.innerHTML = "&nbsp;&#10073&#10073&nbsp;"
	}else{
		vid.pause();
		playbtn.innerHTML = "&#9658"
	}
}
function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}
function seekTimeUpdate() {
	var newTime = vid.currentTime*(100/vid.duration);
	seekslider.value = newTime;

	var durationMinutes = Math.floor(vid.currentMinutes / 60);
	var currentSeconds = Math.floor(vid.currentSeconds - currentMinutes*60);
	var durationMinutes = Math.floor(vid.durationMinutes / 60);
	var durationSeconds = Math.floor(vid.durationSeconds - durationMinutes*60);

	if(currentSeconds < 10 ){
		currentSeconds = "0" + currentSeconds;
	}

	if(durationSeconds < 10 ){
		durationSeconds = "0" + durationSeconds;
	}

	currentTimeText.innerHTML= currentMinutes +" : " + currentSeconds;
	durationTimeText.innerHTML= durationMinutes +" : " + durationSeconds;
}

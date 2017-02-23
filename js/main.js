var vid,playButton,currentTimeText,durationTimeText,muteButton;
function initializePlayer(){
	//set object references
	vid = document.getElementById('my_video');
	playButton = document.getElementById('playpausebtn');
	seekSlider = document.getElementById('seekSlider');
	currentTimeText = document.getElementById('currentTimeText');
	durationTimeText = document.getElementById('durationTimeText');
	muteButton = document.getElementById('muteButton');

	//add event listeners 
	playButton.addEventListener('click',playPause,false);
	seekSlider.addEventListener('change',vidSeek,false);
	vid.addEventListener('timeupdate',seekTimeUpdate,false);
	muteButton.addEventListener('click',vidMute,false);
}

window.onload = initializePlayer;

function playPause() {
	if(vid.paused){
		vid.play();
		playButton.innerHTML = "&nbsp;&#10073&#10073&nbsp;"
	}else{
		vid.pause();
		playButton.innerHTML = "&#9658"
	}
}
function vidSeek(){
	var seekTo = vid.duration * (seekSlider.value / 100);
	vid.currentTime = seekTo;
}
function seekTimeUpdate() {
	var newTime = vid.currentTime*(100/vid.duration);
	seekSlider.value = newTime;

	var currentMinutes = Math.floor(vid.currentTime / 60);
	var currentSeconds = Math.floor(vid.currentTime - currentMinutes*60);
	var durationMinutes = Math.floor(vid.duration / 60);
	var durationSeconds = Math.floor(vid.duration - durationMinutes*60);

	if(currentSeconds < 10 ){currentSeconds = "0" + currentSeconds;}
	if(durationSeconds < 10 ){durationSeconds = "0" + durationSeconds;}
	if(currentMinutes < 10 ){currentMinutes = "0" + currentMinutes;}
	if(durationMinutes < 10 ){durationMinutes = "0" + durationMinutes;}

	currentTimeText.innerHTML= currentMinutes +":" + currentSeconds;
	durationTimeText.innerHTML= durationMinutes +":" + durationSeconds;
}
function vidMute(){
	if(vid.muted){
		vid.play();
		
	}else{
		vid.pause();
		
	}
}
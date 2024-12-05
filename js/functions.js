function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printPlayerResult(msg){
	const playerResultContainer = document.getElementById('player-result-value');
	playerResultContainer.innerHTML = msg;
}

function printComputerResult(msg){
	const computerResultContainer = document.getElementById('computer-result-value');
	computerResultContainer.innerHTML = msg;
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
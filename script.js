const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const controls = document.querySelector('.control');
var logger = document.getElementById('logger');

// functions
const startSession = () => {
  log('ENTER')
  startBtn.disabled = true;
  stopBtn.disabled = false;
};
const stopSession = () => {
  log('ECHAP')
  stopBtn.disabled = true;
  startBtn.disabled = false;
};
function useAction(id) {
  // do some actions with the data then log it
  log(id);
}

function log(value) {
  console.log(value)
  // logger.innerHTML = ('<p class='text-white'>Direction: ['+ value + ']</p>') + logger.innerHTML;
  logger.innerHTML = ('<span class="text-white">['+ value + ']</span>') + logger.innerHTML;
}

// listen buttons 
startBtn.addEventListener('click', startSession);
stopBtn.addEventListener('click', stopSession);

Array.from(document.querySelectorAll('.control')).forEach(element => {
  element.addEventListener('mouseup', mouseEvent => {
    useAction(element.id);
  });
});

//map actions with keyboard keys
const mapper = {
  81: 'dleft', // Q
  90: 'dup', // Z
  68: 'dright', // D
  83: 'ddown', // S
  37: 'oleft', // LEFT
  39: 'oright', // RIGHT
  38: 'oup', // UP
  40: 'odown', // DOWN
  27: 'ECHAP / STOP', // STOP
  13: 'ENTER', // START
};

// listen to key press
document.body.onkeydown = function(e) {
  if(mapper[e.which]) {
    e.preventDefault();
    id = mapper[e.which];
    useAction(id);
	}
}

// annexe: not done for the moment, not need 
// function activate(action) {
//     // get first char
//     const parent = document.getElementById(action.charAt(0) + '-pad');
//     parent.classList.add(action.slice(1))
// }
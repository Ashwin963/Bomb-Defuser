let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;

let intervalId = setInterval(function() {
  countdown = countdown - 1;
  timerEl.textContent = countdown;
  if (countdown === 0) {
    timerEl.textContent = "BOOM";
    timerEl.style.color='red';
    clearInterval(intervalId);
    var imageElement = document.getElementById('gif');
      imageElement.src = 'https://media.tenor.com/u8jwYAiT_DgAAAAM/boom-bomb.gif';
      imageElement.style.width = '300px'; 
      imageElement.style.height = '200px'; 
  }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
  let bombDefuserText = defuserEl.value;
  if (event.key === "Enter" && bombDefuserText === "pointbreak" && countdown !== 0) {
    var imageElement = document.getElementById('gif');
    imageElement.src = 'https://i.gifer.com/origin/b9/b931c61ff9b4cacdd355654be8df1b2b_w200.gif';
    imageElement.alt = 'Iron Man';
    imageElement.style.width = '300px'; 
    imageElement.style.height = '200px';
    timerEl.textContent = "You did it!";
    timerEl.style.color='green';
    clearInterval(intervalId);
  }
});
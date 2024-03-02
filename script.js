let startTime;
let elapsedTime = 0;
let timerInterval;
const lapTimes = [];

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  displayTime(elapsedTime);
}

function displayTime(time) {
  const formattedTime = new Date(time).toISOString().substr(11, 8);
  document.getElementById('stopwatch').textContent = formattedTime;
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime(elapsedTime);
  lapTimes.length = 0;
  displayLapTimes();
}

function recordLapTime() {
  lapTimes.push(elapsedTime);
  displayLapTimes();
}

function displayLapTimes() {
  const lapTableBody = document.getElementById('lap-table-body');
  lapTableBody.innerHTML = '';

  lapTimes.forEach((lapTime, index) => {
    const lapRow = document.createElement('tr');
    lapRow.innerHTML = `
      <td>Lap ${index + 1}</td>
      <td>${new Date(lapTime).toISOString().substr(11, 8)}</td>
    `;
    lapTableBody.appendChild(lapRow);
  });
}

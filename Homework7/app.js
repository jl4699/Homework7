console.log('Hello World!')
// variables
const name = "Jairo Lucio Camargo";
let hasDownloadedResume = false;
let projectEndDate = "2026-11-30";
//functions
function downloadAlert ()
{
    if(!hasDownloadedResume)
    {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true;
    }
}

function showGreeting(name)
{
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

function daysUntilDeadline(date)
{
    let currentDate = new Date();
    let newDate = new Date(date)
    let timeDifference = newDate - currentDate
    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
}
let projectTimer = daysUntilDeadline(projectEndDate);
document.getElementById("timer").textContent = projectTimer;
//web tools/functions
window.addEventListener("DOMContentLoaded", () => {
  const greetingMessage = showGreeting(name);
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = greetingMessage;
  }
})
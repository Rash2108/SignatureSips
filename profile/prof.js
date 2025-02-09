// Points Counter Animation
const pointsEl = document.getElementById("points");
const targetPoints = parseInt(pointsEl.innerText);
let currentPoints = 0;

const updatePoints = () => {
    if (currentPoints < targetPoints) {
        currentPoints += Math.ceil(targetPoints / 100);
        pointsEl.innerText = currentPoints;
        setTimeout(updatePoints, 30);
    } else {
        pointsEl.innerText = targetPoints;
    }
};

updatePoints();

function logout(){
    if(confirm("Do You Want to LOG-OUT")){
        window.location.href="index.html"
    }
}

var d = (new Date()).getTime();
console.log("date", d);

// avoid images getting cached in the browser
document.getElementById("thickness-daily").src = "piomas-thickness-daily-latest.png?ver=" + d;
document.getElementById("thickness-anomaly").src = "piomas-thickness-anomaly-daily-latest.png?ver=" + d;
document.getElementById("thickness-difference").src = "piomas-thickness-difference-latest.png?ver=" + d;

document.getElementById("volume-graph").src = "piomas-volume.png?ver=" + d;
document.getElementById("volume-anomaly").src = "piomas-volume-anomaly.png?ver=" + d;

document.getElementById("fram-export").src = "piomas-fram-export.png?ver=" + d;
document.getElementById("fram-fjl").src = "piomas-fram-fjl-export.png?ver=" + d;

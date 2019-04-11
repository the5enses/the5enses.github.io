function change() {
    var pic = document.getElementById('hobbypic');
    if (pic.src.match("billiards.jpg")) {
        pic.src = "images/movies.jpg"
    }
    else if (pic.src.match("movies.jpg")) {
        pic.src = "images/motogp.jpg"
    }
    else if (pic.src.match("motogp.jpg")) {
        pic.src = "images/photog.jpg"
    }
    else {
        pic.src = "images/billiards.jpg"
    }
}
function letsbegin() {
    alert('Close this alert to go to the next page')
    location.replace("aboutme.html")
}


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 1250);
}
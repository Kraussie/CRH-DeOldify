function newImage() {
    var randImgNum = Math.floor(Math.random() * 19) + 1;
    const ogPath = "assets/" + randImgNum + ".jpg";
    const newPath = "assets/" + randImgNum + "NEW.png";
    document.getElementById('random1').src = ogPath;
    document.getElementById('random2').src = newPath;
    sa_event("newImage");
}
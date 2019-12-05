document.getElementById('button1').addEventListener('click', function() {
    document.querySelector('.popup1').style.display = "flex";
});
document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.popup1').style.display = "none";
});
document.getElementById('button2').addEventListener('click', function() {
    document.querySelector('.popup2').style.display = "flex";
});
document.querySelector('.close1').addEventListener("click", function() {
    document.querySelector('.popup2').style.display = "none";
});
document.getElementById('button3').addEventListener('click', function() {
    document.querySelector('.popup3').style.display = "flex";
});
document.querySelector('.close2').addEventListener("click", function() {
    document.querySelector('.popup3').style.display = "none";
});

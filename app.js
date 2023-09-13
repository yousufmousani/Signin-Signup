function signup(){
    var email = document.getElementById('semail').value;
    var pass = document.getElementById('spass').value;
    var name = document.getElementById('sname').value;
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('username',name)
    location.href = './sign2.html';}

function signin(){
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if(localStorage.getItem('Email') == email & localStorage.getItem('Password') == pass)
    location.href = './welcome.html'
else{
    alert('Your Signin Data are not Match on signup Data')
    location.href = './sign1.html'
}}

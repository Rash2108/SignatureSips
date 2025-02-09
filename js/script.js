var navbar=document.querySelector('.nav');

document.querySelector('#nav-btn').onclick = () =>{
    navbar.classList.toggle('active');
}



function func(){
    var email = document.getElementById("email").value;
    var pas=document.getElementById("password").value;

    if( email=='user@gmail.com' && pas=='123456'){
        alert("scucces");
        window.location.href='re.html';
        alert("redirecting")
    }else if ( email=='me@gmail.com' && pas=='12345678') {
        alert("scucces");
        window.location.href='re.html';
        alert("redirecting")
    } else {
        alert("failed");
    }
}

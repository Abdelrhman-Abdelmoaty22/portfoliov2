const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 120 )
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
};

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('active')
};

var icon = document.querySelector('#icon');

icon.onclick = () =>{
    document.body.classList.toggle('light-theme')
    if(document.body.classList.contains('light-theme')){
        icon.src = "moon.png";
    }else{
        icon.src = "sun.png";
    }
};

function sendToWhatsapp(){
    let number = +201288415321;

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text="
    + "Name : " + name + "%0a" + "E-mail : " + email
    + "%0a" + "Message : " + message + "%0a%0a";
    
    window.open(url,'_blank').focus();
}

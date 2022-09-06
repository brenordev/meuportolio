function scrolltop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
const menu_mobile = document.querySelector('.menu_mobile');
const navigation = document.querySelector('.navigation');
menu_mobile.onclick = function(){
    navigation.classList.toggle('active');
    menu_mobile.classList.toggle('active');
   }
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView:1,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
        // when window width is >= 320px
        540: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
  });

  var menuButton= document.querySelector(".menu_button");
  var menu = document.querySelector(".header");
  menuButton.addEventListener("click",function(){
    menuButton.classList.toggle("menu_button_activ");
    menu.classList.toggle("header_activ");
  })
$(document).ready(function(){
  var sub1swiper = undefined;
  var window_width = window.innerWidth;

  function initSwiper() {

    if (window_width <= 768 && sub1swiper == undefined) {
      $('.concept_art .inner > div').addClass('swiper-container');
      $('.concept_art .inner > div ul').addClass('swiper-wrapper');
      $('.concept_art .inner > div ul li').addClass('swiper-slide');
      sub1swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          // draggable: true,
          // type: 'bullets',
          // hide:true,
          },
      });
    } else if (window_width > 768 && sub1swiper != undefined) {
      sub1swiper.destroy();
      sub1swiper = undefined;
      $('.concept_art .inner > div').removeClass('swiper-container');
      $('.concept_art .inner > div ul').removeClass('swiper-wrapper');
      $('.concept_art .inner > div ul li').removeClass('swiper-slide');

    }
  }

  initSwiper();

  $(window).on('resize', function () {
    // window_width = $(window).width();
    window_width = window.innerWidth;
    initSwiper();
  });

});
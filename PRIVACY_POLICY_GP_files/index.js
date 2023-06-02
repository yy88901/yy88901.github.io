$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    mousewheel: true,
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    }
  });
  swiper.slideToLoop($('.swiper-wrapper').find('.active').index() - 1, 0)
  if ($('body').width()<675){
    $('.container').css({'padding-left' : '5px', 'padding-right' : '5px'})
    swiper.slideToLoop($('.swiper-wrapper').find('.active').index() , 0)
}
  $(".stoppro").click(function(event) {
    event.stopPropagation();
  });
})
$('.editor_js--embed').css('text-align','center')

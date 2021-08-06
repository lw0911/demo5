$(function() {
    // rank切换
    $('.rank-item').hover(
      function () {
          $('.rank-item').removeClass('on');
          $(this).addClass('on');
      }
  )
})

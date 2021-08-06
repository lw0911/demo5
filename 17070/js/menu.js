$("#leftBackTop").click(function() {

    $("html,body").animate({

      scrollTop: '0px'

    });

  });

  $('.float-menu-btn').hover(function() {

    var thatItem = $(this).data('item');

    $(this).css('background', 'url(/assets/images/floater/h' + thatItem + '.png)');

  },
  function() {

    var thatItem = $(this).data('item');

    $(this).css('background', 'none');

  })

  $.each($(".menu-item a"),
  function(i, link) {

    var start = link.href.indexOf("tid=");

    var end = link.href.indexOf("&");

    var catId = link.href.substring(start, end);

    link.href = link.href.replace(catId, 'tid=3');
  })

  console.log(start);

  console.log(end);

  //security iframe

  window.onload = function() {

    if (self != top) {

      var whitelist = ['baidu', 'umeng'];

      for (var i = 0; i < whitelist.length; i++) {

        var substr = whitelist[i];

        if (top.location.href.indexOf(substr, 0) == -1) {

          alert('您正在访问的 盗链网站');

          top.location.href = self.location.href;

        }

      }

    }

}

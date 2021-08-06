/*!
 * 美柠建站  一键轻松建站
 * 详尽信息请看官网：http://www.szmilen.com/
 *
 * Copyright 2014 美柠建站
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途
 *
 * 客服QQ 2858487410
 *
 */

(function($) {
    jQuery.fn.LoadImage = function(settings) {
        settings = jQuery.extend({
            scaling: true,
            width: 80,
            height: 60,
            loadpic: "/images/loading2.gif"
        },settings);

        return this.each(function() {
            $.fn.LoadImage.ShowImg($(this), settings)
        })
    };


    $.fn.LoadImage.ShowImg = function($this, settings) {

		var loading = $("<img alt=\"图片加载中..\" title=\"图片加载中...\" src=\"" + settings.loadpic + "\" />");
		$this.hide();
        $this.after(loading);

        var autoScaling = function() {
            if (settings.scaling) {
                if (img.width > 0 && img.height > 0) {
                    if (img.width / img.height >= settings.width / settings.height) {
                        if (img.width > settings.width) {
                            $this.width(settings.width);
                            $this.height((img.height * settings.width) / img.width)
                        } else {
                            $this.width(img.width);
                            $this.height(img.height)
                        }
                    } else {
                        if (img.height > settings.height) {
                            $this.height(settings.height);
                            $this.width((img.width * settings.height) / img.height)
                        } else {
                            $this.width(img.width);
                            $this.height(img.height)
                        }
                    }
                }
            }
        }

		var src = $this.attr("src");
        var img = new Image();

		img.onload = function(){
			autoScaling();
			$this.attr("src", src);
        	$this.show();
			loading.remove();
		};

		img.src = src;

		//$.ajaxSetup ({ cache: false });
       /* $(img).load(function() {*/
       // })
    }
})(jQuery);


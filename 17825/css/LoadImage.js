jQuery.fn.LoadImage=function(scaling,width,height,strLoad,Method,errorMethod){
    String(strLoad)==""||String(strLoad)=="undefined"?strLoad="加载中...":strLoad;
    return this.each(function(){
        var imgD=$(this);
        var src=$(this).attr("src");
        var img=new Image();
        img.src=src;
        var AutoScaling=function(){
            if(scaling){
            
                if(img.width>0 && img.height>0){ 
                    if(img.width/img.height>=width/height){ 
                        if(img.width>width){ 
                            imgD.width(width); 
                            imgD.height((img.height*width)/img.width); 
                        }else{ 
                            imgD.width(img.width); 
                            imgD.height(img.height); 
                        } 
                    } 
                    else{ 
                        if(img.height>height){ 
                            imgD.height(height); 
                            imgD.width((img.width*height)/img.height); 
                        }else{ 
                            imgD.width(img.width); 
                            imgD.height(img.height); 
                        } 
                    } 
                } 
            }    
        }
        if(img.complete){
            AutoScaling();
            if(Method)
                Method();
            return;
        }
        $(this).attr("src","");
        var loading=$("<div>"+strLoad+"</div>");  
        imgD.hide();
        imgD.after(loading);
        $(img).load(function(){
            AutoScaling();
            loading.remove();
            imgD.attr("src",this.src);
            imgD.show();
            if(Method)
                Method();
        });
        $(img).error(function(){
            loading.remove();
            imgD.show();
            if(errorMethod){
                errorMethod();
            }
        })
    });
}
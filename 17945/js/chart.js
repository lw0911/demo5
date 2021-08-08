var c_chart = {};
c_chart.Chart = function (canvas, angle,anglecount, font,lineWidth, abroadCirclebgcolor, innerCirclebgcolor) {
    var draw = document.getElementById(canvas);
    if (!draw.getContext) {
        return false;
    }
    var context = draw.getContext('2d'), centerX = draw.width / 2,
        centerY = draw.height / 2,
        angle = angle, //占的百分数
        color = [], //"#e5e5e5","red","#F00"
        font = font;
    speed = anglecount; //从度数开始70---》表示从70度开始
    context.lineCap = "round";  //square 平角的帽

    //绘制外圈的圆
    function abroadCircle() {
        context.save();//save() 方法保存当前图像状态的一份拷贝。
        context.strokeStyle = color[0] || abroadCirclebgcolor; //设置描边样式
        context.lineWidth = lineWidth; //设置线宽
        context.beginPath();//路径开始
        //context.arc(centerX, centerY, 100 , -Math.PI/2, -Math.PI/2 +n*rad, false);
        //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.arc(centerX, centerY, centerX - lineWidth, 0, 2 * Math.PI, false);
        /*context.moveTo(210,55);
        context.arc(55,55,20,0,2*Math.PI,false);*/
        context.stroke();
        context.closePath(); //路径结束
        context.restore();//save() 方法把当前状态的一份拷贝压入到一个保存图像状态的栈中。这就允许您临时地改变图像状态，然后，通过调用 restore() 来恢复以前的值。
    }

    //绘制红色外圈
    function innerCircle(n) {
        context.save();
        context.strokeStyle = color[1] || innerCirclebgcolor; //设置描边样式
        context.lineWidth = lineWidth; //设置线宽
        context.beginPath();
        context.arc(centerX, centerY, centerX - lineWidth, -Math.PI / 2, (n * 3.6 - 90) * Math.PI / 180, false);
        context.stroke();
        context.closePath();
        context.restore();
    }
    //百分比文字绘制
    function text(n) {
        context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
        //context.strokeStyle = "#F00"; //设置描边样式
        //context.fillStyle='#f00';//文字颜色
        context.beginPath();
        context.font = font || "40px Arial"; //设置字体大小和字体
        context.fillStyle = color[2] || "#B51817";
        context.textAlign = 'center';//文本程度对齐方法
        context.textBaseline = 'middle';//文本垂曲标的目的，基线位置
        //绘制字体，并且指定位置
        context.fillText(n.toFixed(0) + "%", centerX, centerY);
        context.stroke(); //执行绘制
        context.closePath();
        context.restore();
    }

    //自己一直调用自己动画循环
    var timer = null;
    (function drawFrame() {
        timer = setTimeout(drawFrame, 10);
        //window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, draw.width, draw.height);
        abroadCircle();
        innerCircle(speed);
        text(speed);
        if (anglecount == 0) {//==0表示有进度动态效果 >0则直接显示
            if (speed > angle * 100) clearTimeout(timer);
            speed += 0.2;
        }
    }());
}
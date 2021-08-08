$(function () {
    //圆形统计图
    c_chart.Chart("canvas", 0.6, 0, "40px Arial", 15, "#EBEBEB", "#F21F1F");
    //分数递增
    var totalscore = 4.02;//实际分数
    var score = 0;//从0开始递增
    var timerScore = null;
    (function ditext() {
        timerScore = setTimeout(ditext, 10);
        $("#score").text(score.toFixed(2));
        if ((score + 0.01) >= totalscore) clearTimeout(timerScore);
        score += 0.01;//每次递增0.01
    }());
});


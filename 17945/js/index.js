$(function () {
    //Բ��ͳ��ͼ
    c_chart.Chart("canvas", 0.6, 0, "40px Arial", 15, "#EBEBEB", "#F21F1F");
    //��������
    var totalscore = 4.02;//ʵ�ʷ���
    var score = 0;//��0��ʼ����
    var timerScore = null;
    (function ditext() {
        timerScore = setTimeout(ditext, 10);
        $("#score").text(score.toFixed(2));
        if ((score + 0.01) >= totalscore) clearTimeout(timerScore);
        score += 0.01;//ÿ�ε���0.01
    }());
});


/**
 * Created by sunjian on 2016/12/16.
 */
var wraps = new IScroll('.swiper-slide');
var wrapsT = new IScroll('.bottom-box');
var mySwiper = new Swiper('.swiper-container', {
    direction: "horizontal",
    autoplay: 1000
});


var myScroll, ind = 0,
    pullDown = $("#pullDown"),
    pullUp = $("#pullUp"),
    pullDownLabel = $(".pullDownLabel"),
    pullUpLabel = $(".pullUpLabel"),
    container = $('.list'),
    loadingStep = 0;

pullDown.hide();
pullUp.hide();

myScroll = new IScroll(".bottom-box", {
    probeType: 2
});
myScroll.on("scroll", function () {
    if (loadingStep == 0 && !pullDown.attr("class").match('refresh|loading') && !pullUp.attr("class").match('refresh')) {
        if (this.y > 40) {
            $(".pulldown-tips").hide();
            pullDown.addClass("refresh").show();
            pullDownLabel.text("松手刷新数据");
            loadingStep = 1;
            myScroll.refresh();
        } else if (this.y < (this.maxScrollY - 14)) {//上拉加载更多
            pullUp.addClass("refresh").show();
            pullUpLabel.text("正在载入");
            loadingStep = 1;
            myScroll.refresh();
        }
    }
});
myScroll.on("scrollEnd", function () {
    if (loadingStep == 1) {
        if (pullUp.attr("class").match("refresh")) {//下拉刷新操作
            pullUp.removeClass("refresh").addClass("loading");
            pullUpLabel.text("正在刷新");
            loadingStep = 2;
            pullUpAction();
        }
    }
});
myScroll.on("scrollEnd", function () {
    if (loadingStep == 1) {
        if (pullDown.attr("class").match("refresh")) {//下拉刷新操作
            pullDown.removeClass("refresh").addClass("loading");
            pullDownLabel.text("正在刷新");
            loadingStep = 2;
            pullDownAction();
        }
    }
});

function pullDownAction() {
    ind++;
    if (ind > 8) ind = 0;
    container.prepend('<dl><dt><img src="images/m' + ind + '.jpg" alt=""/></dt><dd> <h4>现在因为一些讨论使得民心不正</h4><p><span>26<i class="fa fa-ellipsis-h"></i></span>乐善道人</p></dd></dl>');
    pullDown.attr('class', '').hide();
    myScroll.refresh();
    loadingStep = 0;
    $(".pulldown-tips").show();
}

function pullUpAction() {
    pullUp.show();
    ind++;
    if (ind > 8) ind = 0;
    container.append('<dl><dt><img src="images/m' + ind + '.jpg" alt=""/></dt><dd><h4>现在因为一些讨论使得民心不正</h4><p><span>26<i class="fa fa-ellipsis-h"></i></span>乐善道人</p></dd></dl>');
    pullUp.attr('class', '').hide();
    myScroll.refresh();
    loadingStep = 0;

}

document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);


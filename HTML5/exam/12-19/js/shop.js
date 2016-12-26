/**
 * Created by sunjian on 2016/12/19.
 */
var scroll = new IScroll('.one');
var scrollt = new IScroll('.two');
var scroth = new IScroll('.three');

$(".back").click(function(){
    alert("only the windows that were opened by it")
});


$.ajax({
    "url": "shop.json",
    "datatype": "",
    success: function (data) {
        var str = "";
        $.each(data,function(ind,val){
             str += "<dl>" +
             "<dt><img src=" +
                 val.imgs +"/></dt>" +
             "<dd>" +
             "<h4>" + val.name + "</h4>" +
             "<p class='list-a'>" + val.ping + "</p>" +
             "<p class='list-b'>" +
             "<span class='rit'>" + val.span + "</span>" + val.xiaol + "</p>" +
             "<p class='list-c'>" + val.time + "</p>" +
             "</dd>" +
             "</dl>";
        });


        $(".scroll").append(str);
        scroll.refresh();
        scrollt.refresh();
        scroth.refresh();

        $(".nav div").click(function(){
            $(this).addClass("bor-btm").siblings().removeClass();
            mySwiper.slideTo($(this).index())
        });
        var mySwiper = new Swiper('.swiper-container',{
            onSlideChangeStart: function (swiper) {
                var ind = swiper.activeIndex;
                $(".nav div").eq(ind).addClass("bor-btm").siblings().removeClass("bor-btm")
            }
        });

    },
    error: function () {
        console.log("error")
    }

});


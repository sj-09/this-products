/**
 * Created by sunjian on 2016/12/22.
 */
var wrapsT = new IScroll('.section');

var myscroll=new IScroll('.box',{
    scrollX: true
});
/*var mySwiper = new Swiper('.swiper-container', {
    direction: "horizontal",
    slidesPerView: 'auto',
    spaceBetween: 10
});*/
$(".slideup").click(function(){
    if($(".neir").height()<200) {
        $(".neir").stop().animate({'height': '280px'}, 600);
        $(".slideup").html('&#xe6a5;')
    }else{
        $(".neir").stop().animate({'height': '100px'}, 600);
        $(".slideup").html('&#xe6a6;')
    }
    wrapsT.refresh();
});

$(".zan").click(function(){
    if($(this).hasClass('red')){
        $(this).removeClass("red");
        V = parseInt($(this).html());
        $(this).html(--V +"<i class='ic'>&#xe717;</i>")
    }else{
        $(this).addClass("red");
        V = parseInt($(this).html());
        $(this).html(++V +"<i class='ic'>&#xe717;</i>")
    }

});

$(".fix").click(function(){
    $(this).fadeOut(600);
    $(".dis").fadeIn(600);
    $(".clos").click(function(){
        $(".dis").fadeOut(600);
        $(".fix").fadeIn(600)
    })
});
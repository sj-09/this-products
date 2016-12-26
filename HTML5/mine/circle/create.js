/**
 * Created by sunjian on 2016/12/3.
 */
function createDrow(opt) {
    var cvs = document.getElementById(opt.canvas),
        cxt = cvs.getContext("2d"),
        source= 50;
    var cvsH=cvs.height,
        cvsW=cvs.width,
        bot=cvsH-source,
        stepY=(cvsW-2*source)/(opt.x.length-1),
        stepX=(cvsH-2*source)/(opt.y.length-1),
        scale=stepX/50;

    for (var i = 0; i < opt.x.length; i++) {
        cxt.beginPath();
        cxt.moveTo(source+stepY*i,source);
        cxt.lineTo(source+stepY*i,cvsH-source);
        cxt.stroke();
        cxt.fillText(opt.x[i],source+stepY*i-10,cvsH-source+15)
    }
    for (var i = 0; i < opt.x.length; i++) {
        cxt.beginPath();
        cxt.moveTo(source,source+stepX*i);
        cxt.lineTo(cvsW-source,source+stepX*i);
        cxt.stroke();
        cxt.fillText(opt.y[ opt.x.length-i-1],source-20,source+stepX*i)
    }
    for(var i=0;i<opt.data.length;i++){
        cxt.beginPath();
        cxt.moveTo(source+i*stepY,bot-opt.data[i]*scale);
        cxt.lineTo(source+(i+1)*stepY,bot-opt.data[i+1]*scale);
        cxt.strokeStyle="red";
        cxt.stroke()
    }

}
$(document).ready(function (){
    let intervalId = window.setInterval(function(){
        //$('#webcamcontainerID').hide();
        //$('#webcamifame').attr("opacity", "0");
        //$('#webcamcontainerID').attr("opacity", "0");
        $('#webcamifame').attr("src", $('#webcamifame').attr("src"));

        //$('#webcamifame').attr("visibility", "collapse");
    }, 170000);
    //170000
});


function iframeOnLoad(obj){
    setTimeout(function(){
        obj.style.visibility='visible';
        /*$('#webcamifame').attr("opacity", "1");
        $('#webcamcontainerID').attr("opacity", "1");
        $('#webcamcontainerID').attr("visibility", "visible");*/


    },2000);

}
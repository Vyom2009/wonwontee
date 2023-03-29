function setup(){
    canvas=createCanvas(400,400);
    canvas.position(100,200);
    video=createCapture(VIDEO);
    video.hide();
    color="";
    }
    function draw(){
        image(video,0,0,400,400);
        tint(color);
    }
    function apply_color(){
        color=document.getElementById("colorname").value;
    }
    function take_snapshot(){
        save("savedelement.png");
    }
var canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

var rover_x=10
var rover_y=10
var rover_width=100
var rover_height=90

mars_images=["Image 1.jpg","image 2.jpg","image 3.jpg","image 4.jpg","mars.jpg"]

random_number=Math.floor(Math.random()*5)

background_image=mars_images[random_number]
rover_image="rover.png"

function add(){
    bg_tag=new Image()
    bg_tag.onload=upload_background
    bg_tag.src=background_image
    rover_tag=new Image()
    rover_tag.onload=upload_rover
    rover_tag.src=rover_image
}
function upload_background(){
    ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height)

}
function upload_rover(){
    ctx.drawImage(rover_tag,rover_x,rover_y,rover_width,rover_height)

}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    console.log(e)
    key_pressed=e.keyCode
    if(key_pressed=="38"){
        console.log("up")
        up ()
    }
    if(key_pressed=="37"){
        console.log("left")
        left ()
    }
    if(key_pressed=="39"){
        console.log("right")
        right ()
    }
    if(key_pressed=="40"){
        console.log("down")
        down ()
    }
}
function up(){
    if(rover_y > 0){
        rover_y=rover_y - 10;
        upload_background();
        upload_rover();
    }
}
function down(){
    if(rover_y < 500){
        rover_y=rover_y + 10;
        upload_background();
        upload_rover();
    }
}
function left(){
    if(rover_x > 0){
        rover_x=rover_x - 10;
        upload_background();
        upload_rover();
    }
}
function right(){
    if(rover_x < 700){
        rover_x=rover_x + 10;
        upload_background();
        upload_rover();
    }
}

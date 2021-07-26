var canvas=new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;
block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        Blocks=Img;
        Blocks.scaleToWidth(block_image_width);
        Blocks.scaleToHeight(block_image_height);
        Blocks.set({
          top:block_y,
          left:block_x
        });
        canvas.add(Blocks);
     })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82'){
		block_x = 0;
		new_image("rr1.png")
	}
	if(keyPressed == '71'){
		block_x = 250;
		new_image("gr.png")
	}
	if(keyPressed == '89'){
		block_x =400;
		new_image("yr.png")
	}
	if(keyPressed == '80'){
		block_x = 650;
		new_image("pr.png")
	}
	if(keyPressed == '66'){
		block_x = 750;
		new_image("br.png")
	}
	
}


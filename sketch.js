var colourPicker;
let strokeWeightSlider;
var bgColourPicker;
var erasing = false;

function setup(){
    createCanvas(1200,800);
    colourPicker = createColorPicker('LavenderBlush');
    
    strokeWeightSlider = createSlider(1,10,5,);
    
    bgColourPicker = createColorPicker('CornflowerBlue'); 
    
    var bgColorButton = createButton('Refresh');
    var saveButton = createButton('save image')
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint ); 
    saveButton.mousePressed(saveDrawing);
    background( bgColourPicker.value() );
    
    var eraserButton = createButton("Eraser");
    eraserButton.mousePressed(() => {
        erasing = true;
        eraserButton.hide();
        drawButton.show();
    });
    var drawButton = createButton("Draw");
    drawButton.mousePressed(() =>{
        erasing = false;
        drawButton.hide();
        eraserButton.show();
    });
    drawButton.hide();
}

function draw(){
    strokeWeight(strokeWeightSlider.value());
    if(mouseIsPressed){
        if (erasing){
            stroke(bgColourPicker.value());
        }else{
            stroke(colourPicker.value());
        }
        line(mouseX, mouseY, pmouseX, pmouseY);
    } 
}

function repaint(){
    background( bgColourPicker.value() );
    console.log( bgColourPicker.value().setGreen(300) );
}

function saveDrawing() {
    // remixed from https://p5js.org/reference/p5/saveCanvas/
    saveCanvas('my_drawing', 'png');
}
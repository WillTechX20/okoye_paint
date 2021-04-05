var drawingCanvas=document.querySelector('canvas');
var drawingCanvasCTX2D=drawingCanvas.getContext('2d');
var lineWidthNum=2;
var lineColor='red';
var i=null;
var currentMouseXNum=null;
var currentMouseYNum=null;
var lastMouseXNum=null;
var lastMouseYNum=null;

drawingCanvasCTX2D.strokeStyle='red';
drawingCanvasCTX2D.lineWidth=2;

drawingCanvas.onmouseup=function(){
    i='mouseup';
};
drawingCanvas.onmouseleave=function(){
    i='mouseleave';
};
drawingCanvas.onmousedown=function(){
    i='mousedown';
};

function drawingCanvasOnTouchMove(eventVar){
    var currentMouseXNum=eventVar.touches[0].clientX-drawingCanvas.offsetLeft;
    var currentMouseYNum=eventVar.touches[0].clientY-drawingCanvas.offsetTop;

    drawingCanvasCTX2D.beginPath();
    drawingCanvasCTX2D.moveTo(lastMouseXNum, lastMouseYNum);
    drawingCanvasCTX2D.lineTo(currentMouseXNum, currentMouseYNum);
    drawingCanvasCTX2D.stroke();
    lastMouseXNum=currentMouseXNum;
    lastMouseYNum=currentMouseYNum;
    currentMouseXNum=null;
    currentMouseYNum=null;
}

drawingCanvas.addEventListener('touchmove', drawingCanvasOnTouchMove);

function clearArea(){
    drawingCanvasCTX2D.clearRect(0, 0, 800, 800);
}

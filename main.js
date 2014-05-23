

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];
var jobValue = prompt("Enter Text"); // first element in DOM  (index 0) with name="txtJob"

if (jobValue === "spacegeek224")
{
 window.location.replace("http://technocraft.zyro.com");   
}
drawName(jobValue, letterColors);

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();

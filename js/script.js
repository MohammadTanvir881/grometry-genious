// triangle section

function calculateTriangleArea(){
    // get traingal base input
    const traingalBaseInput = document.getElementById('traingal-base-input');
    const traingalBase = traingalBaseInput.value;
    const base = parseFloat(traingalBase)
    //  console.log(base)

    // get traingal height input
    const traingalHeightInput = document.getElementById('traingal-height-input');
    const traingalHeight = traingalHeightInput.value;
    const height = parseFloat(traingalHeight);
    // console.log(height)

    // area calculate
    const area = 0.5 * base * height;
    // console.log('area:', area)
    // text the value of area in text field

    const textArea = document.getElementById('traingal-area');
    textArea.innerText = area;
}

// rectangle section

function calculateRectangleArea(){
    // ractangle length section
    const inputLength = document.getElementById('rectangle-length');
    const length = parseFloat(inputLength.value);
    // console.log(length)

    // rectangle width section

    const inputWidth = document.getElementById('rectangle-width');
    const width = parseFloat(inputWidth.value);
   // calculate the area

   const area = length * width;
   // transfar the value of rectangle area

   const areaDisplay = document.getElementById('rextangle-area');
   areaDisplay.innerText = area;
}
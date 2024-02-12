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


// Parallelogram section
   // base
function calculateParallelogramArea(){
    const baseInput = document.getElementById('Parallelogram-base-input');
    const base = parseFloat(baseInput.value);
    // console.log(base)

    // height

    const heightInput = document.getElementById('Parallelogram-height-input');
    const height = parseFloat(heightInput.value);
    // console.log(height)

    // area

    const area = base * height;
    // console.log(area)

    // transfar the value

    const displayArea = document.getElementById('Parallelogram-area');
    displayArea.innerText = area;
}

// Rhombus section

 function calculateRhombusArea(){
    // d1
    const d1Input = document.getElementById('rohmbus-d1');
    const d1 = parseFloat(d1Input.value);
    // d2

    const d2Input = document.getElementById('rohmbus-d2')
    const d2 = parseFloat(d2Input.value);

    //area 

    const area = 0.5 * d1 * d2;
    // transfer area

    const displayArea = document.getElementById('rhombus-area');
    displayArea.innerText = area;
 }

 // Pentagon section

 function calculatePentagonArea(){
    // base
    const baseInput = document.getElementById('pentagon-base');
    const base = parseFloat(baseInput.value)
    
    // height 

    const heightInput = document.getElementById('pentagon-height');
    const height = parseInt(heightInput.value);


    // area 
    const area = 0.5*base*height;
    // transfer value

    const displayArea = document.getElementById('pentagoan-area');
    displayArea.innerText = area;
  }

  // ellipse section

  function calculateEllipseArea(){
     // base
     const baseInput = document.getElementById('ellipse-base');
     const base = parseFloat(baseInput.value)
     
     // height 
 
     const heightInput = document.getElementById('ellipse-height');
     const height = parseInt(heightInput.value);
 
 
     // area 
     const area = 3.1415 * base * height;
     // transfer value
 
     const displayArea = document.getElementById('ellipse-area');
     displayArea.innerText = area;
  }
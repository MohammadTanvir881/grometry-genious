// triangle section

function calculateTriangleArea(){
    // get traingal base input
    const traingalBaseInput = document.getElementById('traingal-base-input');
    const traingalBase = traingalBaseInput.value;
    const base = parseFloat(traingalBase)
     console.log(base)

    // get traingal height input
    const traingalHeightInput = document.getElementById('traingal-height-input');
    const traingalHeight = traingalHeightInput.value;
    const height = parseFloat(traingalHeight);
    console.log(height)

    // area calculate
    const area = 0.5 * base * height;
    // console.log('area:', area)
    // text the value of area in text field

    const textArea = document.getElementById('traingal-area');
    textArea.innerText = area;
}
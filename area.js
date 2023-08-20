// triangle
function calculateTriangleArea() {
  //get triangle base value
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  //get triangle height
  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  const areaT = 0.5 * base * height;
  // show area
  const areaSpanT = document.getElementById("triangle-area");
  areaSpanT.innerText = areaT;
}
//rectangle
function calculateRectangleArea() {
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  //length
  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  // area
  const areaR = width * length;
  // show area
  const areaSpanR = document.getElementById("rectangle-area");
  areaSpanR.innerText = areaR;
}
// Parallelogram
function calculateParallelogramArea() {
  const basePField = document.getElementById("parallelogram-base");
  const basePvalueText = basePField.value;
  const baseP = parseFloat(basePvalueText);
  // height
  const heightPField = document.getElementById("parallelogram-height");
  const heightPValueText = heightPField.value;
  const heightP = parseFloat(heightPValueText);
  // area
  const areaP = baseP * heightP;
  // show area
  const areaSpan = document.getElementById("parallelogram-area");
  areaSpan.innerText = areaP;
}
function calculateRhombusArea() {}
// pentagon
function calculatePentagonArea() {}
function calculateEllipseArea() {}

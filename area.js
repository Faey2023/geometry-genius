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
  const width = getInputValue("rectangle-width");
  //length
  const length = getInputValue("rectangle-length");
  // area
  const area = width * length;
  // show area
  setElementInnerText("rectangle-area", area);
}
// Parallelogram
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  // height
  const height = getInputValue("parallelogram-height");
  // area
  const area = base * height;
  setElementInnerText("parallelogram-area", area);
}
function calculateRhombusArea() {
  const d1 = getInputValue("rhombus-d1");
  const d2 = getInputValue("rhombus-d2");
  const area = 0.5 * d1 * d2;
  setElementInnerText("rhombus-area", area);
}
// pentagon
function calculatePentagonArea() {
  const perimeter = getInputValue("pentagon-perimeter");
  const apothem = getInputValue("pentagon-apothem");
  const area = 0.5 * perimeter * apothem;
  setElementInnerText("pentagon-area", area);
}
function calculateEllipseArea() {
  const a = getInputValue("ellipse-a");
  const b = getInputValue("ellipse-b");
  const area = Math.PI * a * b;
  setElementInnerText("ellipse-area", area);
}

//reusable get function
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}
//reusable set function
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

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
  const areaTwo = areaT.toFixed(2);
  // show area
  const areaSpanT = document.getElementById("triangle-area");
  areaSpanT.innerText = areaTwo;
  addToCalculationEntry("Triangle", areaTwo);
}
//rectangle
function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  //length
  const length = getInputValue("rectangle-length");
  // area
  const area = width * length;
  const areaTwo = area.toFixed(2);
  // show area
  setElementInnerText("rectangle-area", areaTwo);
  addToCalculationEntry("Rectangle", areaTwo);
}
// Parallelogram
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  // height
  const height = getInputValue("parallelogram-height");
  // area
  const area = base * height;
  const areaTwo = area.toFixed(2);
  setElementInnerText("parallelogram-area", areaTwo);
  addToCalculationEntry("Parallelogram", areaTwo);
}
function calculateRhombusArea() {
  const d1 = getInputValue("rhombus-d1");
  const d2 = getInputValue("rhombus-d2");
  const area = 0.5 * d1 * d2;
  const areaTwo = area.toFixed(2);
  setElementInnerText("rhombus-area", areaTwo);
  addToCalculationEntry("Rhombus", areaTwo);
}
// pentagon
function calculatePentagonArea() {
  const perimeter = getInputValue("pentagon-perimeter");
  const apothem = getInputValue("pentagon-apothem");
  const area = 0.5 * perimeter * apothem;
  const areaTwo = area.toFixed(2);
  setElementInnerText("pentagon-area", areaTwo);
  addToCalculationEntry("Pentagon", areaTwo);
}
function calculateEllipseArea() {
  const a = getInputValue("ellipse-a");
  const b = getInputValue("ellipse-b");
  const area = Math.PI * a * b;
  const areaTwo = area.toFixed(2);
  setElementInnerText("ellipse-area", areaTwo);
  addToCalculationEntry("Ellipse", areaTwo);
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

//add to calculation entry
function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("font-bold", "text-center", "my-4");
  p.innerHTML = ` ${count + 1}. ${areaType} ${area} cm<sup>2</sup>`;
  calculationEntry.appendChild(p);
}
//data validation

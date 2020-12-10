let screenView = "";
let expression = "";
function pushText(char) {
  expression += char;
  screenView += char;
  screenView = screenView.replace("**2", "²");
  screenView = screenView.replace("**3", "³");
  screenView = screenView.replace("*", "×");
  screenView = screenView.replace("/", "÷");
  document.getElementById("calculator-screen").innerText = screenView;
}
function cal() {
  screenView = eval(expression);
  document.getElementById("calculator-screen").innerText = screenView;
}
function clearScreen() {
  document.getElementById("calculator-screen").innerText = "0";
  expression = "0";
  screenView = "";
}
function sqrt() {
  expression = "Math.sqrt(" + expression + ")";
  cal();
}
function giaiThua(num) {
  let gt = 1;
  for (let i = 1; i <= num; i++) {
    gt *= i;
  }
  return gt;
}

function gtButton() {
    expression = giaiThua(eval(expression));
    cal();
}
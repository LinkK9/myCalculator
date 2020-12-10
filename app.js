let screenView = "";
let expression = "";
function pushText(char) {
  expression += char;
  screenView += char;
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

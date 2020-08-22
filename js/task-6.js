let input;
let total = 0;
while (input !== null) {
  input = prompt("ввести число: ");
  if (input === null) {
    break;
  } else if (input === "") {
    alert("Было введено не число, попробуйте еще раз!");
    continue;
  } else if (isNaN(parseInt(input))) {
    alert("Было введено не число, попробуйте еще раз!");
    continue;
  }
  total += Number.parseInt(input);
}
alert("Общая сумма чисел равна: " + total);

/*Вывести простые числа
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.*/

let num1 = +prompt("Введите первое число из интервала");
let num2 = +prompt("Введите второе число из интервала");
let array = [];
if (num1 < num2) {
  for (let i = num1; i <= num2; i++) {
    for (var j = 2; j <= i; j++) {
      if (i % j == 0) break;
    }
    if (j == i) {
      array.push(i);
    }
  }
  alert('В интервале от ' + num1 + ' до ' + num2 + ' простыми числами являются: ' + array);
} else alert('Ошибка! Первое число должно быть меньше второго.');



/*Напишите код, который будет спрашивать логин (prompt).

Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».*/

let login = "Админ";
let password = "Черный властелин";

let userName = prompt("Кто пришел?");
if (userName == login) {
  let pass = prompt("Пароль?");
  if (pass == password) {
    alert("Добро пожаловать!");
  } else if (pass == null) {
    alert("Вход отменен");
  } else {
    alert("Пароль неверен");
  }
} else if (userName == null) {
  alert("Вход отменен");
} else {
  alert("Я вас не знаю");
}

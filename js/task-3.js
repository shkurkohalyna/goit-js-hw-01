const ADMIN_PASSWORD = prompt("Пароль");
let USER_PASSWORD;
let message;
const ACCES_USER = "jqueryismyjam";
if (ADMIN_PASSWORD === null) {
  message = "Отменено пользователем!";
} else if (ADMIN_PASSWORD === ACCES_USER) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);

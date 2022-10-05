/**
 * Typy proste
 *
 * */
//Tablica zawierająca stringi i liczby
const foobar = ['abc', 2, 3, 'def', 'aaa'];
/* ENUM */
//Role użytkowników
//inaczej wyliczenie, stosujemy, żeby zapamiętało i ograniczyło nasz wybór.
//Dodatkowo warto wykorzystać opcję, żeby zachować enumy.
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["BannedUser"] = 2] = "BannedUser";
})(UserRole || (UserRole = {}));
const pawelUserRole = UserRole.Admin;
var TaskPriority;
(function (TaskPriority) {
    TaskPriority[TaskPriority["Low"] = 0] = "Low";
    TaskPriority[TaskPriority["Normal"] = 1] = "Normal";
    TaskPriority[TaskPriority["High"] = 2] = "High";
    TaskPriority[TaskPriority["Critical"] = 3] = "Critical";
})(TaskPriority || (TaskPriority = {}));
const task = {
    name: 'Iść po bułki do sklepu',
    priority: TaskPriority.Critical,
};
/* Void */
const display = () => {
    console.log('wyświetl');
};
/* null */
function myFunction() {
    return Math.random() < 0.5 ? null : Math.random();
}
//# sourceMappingURL=index.js.map
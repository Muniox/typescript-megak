/**
 * Typy proste
 *
 * */


//Tablica zawierająca stringi i liczby
const foobar: (number | string)[] = ['abc', 2, 3, 'def', 'aaa'];

/* ENUM */
//Role użytkowników
//inaczej wyliczenie, stosujemy, żeby zapamiętało i ograniczyło nasz wybór.
//Dodatkowo warto wykorzystać opcję, żeby zachować enumy.

enum UserRole {
    Admin,
    User,
    BannedUser,
}

const pawelUserRole = UserRole.Admin;


enum TaskPriority {
    Low,
    Normal,
    High,
    Critical,
}

const task = {
    name: 'Iść po bułki do sklepu',
    priority: TaskPriority.Critical,
}

/* Void */

const display = (): void => {
    console.log('wyświetl');
}

/* null */

function myFunction(): number | null {
    return Math.random() < 0.5 ? null : Math.random();
}
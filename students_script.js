// массив юзеров
let baseMass = ['Вася', 'Петя', 'Коля', 'Женя'];

// рисуем массива юзеров на экран
function printMass(anyArray, targTable) {
    let oldTable = document.getElementById('tableRemovable');
    // если таблица не пустая - почистим ее
    if (oldTable) {
        targTable.removeChild(oldTable);
    }

    // создаем элемент таблица
    let tableRes = document.createElement('table')
    // строка индекса
    let rawIndex = document.createElement('tr')
    // строка значений
    let rawValue = document.createElement('tr');
    // ячейка заголовок
    let index = document.createElement('th');
    // присвоим значение ячейки заголовка
    index.innerText = 'Index';
    // ячейка значений
    let valueTd = document.createElement('td');
    // присвоение значения ячейке значений
    valueTd.innerText = 'Value';
    // добавить к строкам новые ячейки
    rawIndex.appendChild(index);
    rawValue.appendChild(valueTd);

    // цикл, который пройдется по массиву и отрисует его значения
    for (let key_elem in anyArray) {
        // Ячейка заголовок
        let index = document.createElement('th');
        index.innerText = key_elem;
        // Ячейка значений
        let valueTd = document.createElement('td');
        valueTd.innerText = anyArray[key_elem];
        // Добавить к строкам новые ячейки
        rawIndex.appendChild(index);
        rawValue.appendChild(valueTd);
    }

    // записываем в теблицу строки со значениями
    tableRes.appendChild(rawIndex);
    tableRes.appendChild(rawValue);
    // добавим id таблицы
    tableRes.id = 'tableRemovable';
    // запишем таблицу на свое место
    targTable.appendChild(tableRes);
}

// выталкиваем с конца
function popMass() {
    // если длина 0 - выражение будет приведено к false
    if (baseMass.length) {
        // используем метод массива
        let result = baseMass.pop();
        // записываем результат в html документ
        pop_shift_Value.innerHTML = '- ' + result;
        // вызов функции вывода массива
        printMass(baseMass, massOnBoard);
    } else {
        alert("Массив уже пуст!\nСначала добавьте значения");
    }
}

// выталкиваем с начала
function shiftMass() {
    // если длина 0 - выражение будет приведено к false
    if (baseMass.length) {
        let result = baseMass.shift();

        pop_shift_Value.innerHTML = '- ' + result;
        printMass(baseMass, massOnBoard);
    } else {
        alert("Массив уже пуст!");
    }
}

//добавим значение в конец
function pushMass() {
    // записали значение ввода в переменную
    let pushVal = push_unshift_Value.value;
    // если значение есть то true
    if (pushVal) {
        baseMass.push(pushVal)
        //очистим поле ввода
        push_unshift_Value.value = '';
        // это выведет обновленный массив
        printMass(baseMass, massOnBoard);
    } else {
        alert("Введите значение!");
    }
}

//добавим значение в начало
function unshiftMass() {

    let shiftVal = push_unshift_Value.value;

    if (shiftVal) {
        baseMass.unshift(shiftVal)
        //очистим поле ввода
        push_unshift_Value.value = '';
        // это выведет обновленный массив
        printMass(baseMass, massOnBoard);
    } else {
        alert("Введите значение!");
    }
}

//узнаем длину массива
function lengthMass() {
    let result = baseMass.length

    lengthValue.innerHTML = " - " + result;
}

//объединяем массивы в 1
function concatMass() {
    //разобьем введеную строку в массив
    let new_mass = concatValue.value.split('');
    if (new_mass) {
        //объединяем
        baseMass = baseMass.concat(new_mass)
    } else {
        alert("Введите значение!");
    }

    printMass(baseMass, massOnBoard);
}
//ищем индекс элемента
function searchMass() {
    let searchIndex = searchValue.value

    if (searchIndex) {
        let indexRes = baseMass.indexOf(searchIndex)

        if (indexRes === -1) {
            resIndex.innerText = 'не найден'
        } else {
            resIndex.innerText = `${indexRes}`
        }
    }
}

// массив пользователей
let usersMass = [];

// функция-конструктор объектов User
function User(names, surname, patronymic, login, age, growth) {
    this.names = names;
    this.surname = surname;
    this.patronymic = patronymic;
    this.login = login;
    this.age = age;
    this.growth = growth;
}

// функция, для добавления объетов типа User
function addUser() {
    // если хотябы одно поле пусто в isNotNull запишется пустое значение
    let isNotNull = names.value && secName.value && lastName.value && login.value && Number(age.value) && Number(userHeight.value);
    // проверяем что нет ни одного пустого поля инпут
    if (isNotNull) {
        // создаем объект типа User
        let newUser = new User(
            names.value,
            secName.value,
            lastName.value,
            login.value,
            age.value,
            userHeight.value
        );

        // используем id объета из массива для дочерних элементов селектора
        let id = usersMass.length;
        // добавляем новый элемент в массив
        usersMass.push(newUser);

        // создаем дочерний элемент селектора - строка выпадающего списка
        let opt = document.createElement("option");
        // value позволит в дальнейшем идентифицировать выбранный элемент селектора
        // в данном длучае будет соответсвовать индексу в массиве
        opt.value = String(id);
        // текст - то что увидит пользователь в выпадающем списке
        opt.text = newUser.login;
        // теперь к элементу документа мы добавили новый дочерний элемент
        selectUser.appendChild(opt);
        // рисуем табличку с добавленными юзерами
        printUserMass(usersMass, massOfUser);

        // сотрем ненужный текст в input-ах в случае успеха
        names.value = '';
        secName.value = '';
        lastName.value = '';
        login.value = '';
        age.value = '';
        userHeight.value = '';
    } else {
        // если не все поля заполнены - вызываем окно alert
        alert("Введите значения! Убедитесь что все данные заполненны!")
    }
}

//средний рост юзеров
function midleHeight() {
    let sum = 0;

    for (let user of usersMass) {
        sum += +user.growth;
    }

    let result = sum / usersMass.length
    userResult.innerText = `средний рост ${result}`
}

//средний возраст юзеров
function midleAge() {
    let sum = 0;

    for (let user of usersMass) {
        sum += +user.age;
    }

    let result = sum / usersMass.length
    userResult.innerText = `средний возраст ${result}`
}

//колличество добавленных юзеров
function countUsers() {
    let result = usersMass.length

    userResult.innerText = `всего пользователей ${result}`
}

// самый старый пользователь
function myFunc() {
    let max = 0;
    let name;

    for (let user of usersMass) {

        if (max <= +user.age) {
            max = +user.age
            name = user.login
        }

    }
    userResult.innerText = `самый старый юзер ${name}, ему ${max} лет`
}


// рисуем массив добавленных юзеров на экран
function printUserMass(anyArray, targTable) {
    let oldTable = document.getElementById('tableRemovableUsers');

    if (oldTable) {
        targTable.removeChild(oldTable);
    }

    let tableRes = document.createElement('table')
    let rawIndex = document.createElement('tr')
    let rawValue = document.createElement('tr');
    let index = document.createElement('th');
    index.innerText = 'Index';
    let valueTd = document.createElement('td');
    valueTd.innerText = 'Value';
    rawIndex.appendChild(index);
    rawValue.appendChild(valueTd);

    for (let i = 0; i < usersMass.length; i++) {
        let index = document.createElement('th');
        index.innerText = i;

        let valueTd = document.createElement('td');
        valueTd.innerText = anyArray[i].login;

        rawIndex.appendChild(index);
        rawValue.appendChild(valueTd);
    }

    tableRes.appendChild(rawIndex);
    tableRes.appendChild(rawValue);

    tableRes.id = 'tableRemovableUsers';

    targTable.appendChild(tableRes);
}

//запускаем функцию отрисовки printMass
//передаем в параметры массив baseMass и id div'а massOnBoard, где будем рисовать
document.addEventListener("DOMContentLoaded", function () {
    printMass(baseMass, massOnBoard);
});

//запускаем функцию отрисовки printUserMass
//передаем в параметры созданный массив с объектами usersMass и id div'а massOfUser, где будем рисовать
document.addEventListener("DOMContentLoaded", function () {
    printUserMass(usersMass, massOfUser);
});


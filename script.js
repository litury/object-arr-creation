// массив, для хранения объектов Cubik
let cubsArray = [];

// функция-конструктор объектов Cubik
function Cubik (x,y,z, name='no name') {
    this.length = x;
    this.height = y;
    this.width = z;
    this.name = name;

    this.getCubSize = function () {
        return this.length * this.height * this.width
    }
}

// функция, для добавления объетов типа Cubik
function addCub() {
    // если хотябы одно поле пусто в isNotNull запишется пустое значение
    let isNotNull = Number(cubX.value) && Number(cubY.value) && Number(cubZ.value) && cubName.value;
    // проверяем что нет ни одного пустого поля инпут
    if (isNotNull) {
        // создаем объект типа Cubik
        let newCub = new Cubik(
            cubX.value,
            cubY.value,
            cubZ.value,
            cubName.value
        );
        // используем id объета из массива для дочерних элементов селектора
        let id = cubsArray.length;
        // добавляем новый элемент в массив
        cubsArray.push(newCub);

        // создаем дочерний элемент селектора -- строка выпадающего списка
        let opt = document.createElement("option");
        // value позволит в дальнейшем идентифицировать выбранный элемент селектора
        // в данном длучае будет соответсвовать индексу в массиве
        opt.value = String(id);
        // текст - то что увидит пользователь в выпадающем списке
        opt.text = newCub.name;
        // теперь к элементу документа мы добавили новый дочерний элемент
        selectCub.appendChild(opt);

        // сотрем ненужный текст в input-ах в случае успеха
        cubX.value = '';
        cubY.value = '';
        cubZ.value = '', cubName.value = '';
    }
    else {
        // если не все поля заполнены - вызываем окно alert
        alert("Введите значения! Убедитесь что x, y, z это числа!")
    }

}

// функция вывода в html объема "куба"
function cubSize(){

    // получаем идентификатор выбранного элемента в селекторе
    let id = selectCub.value;
    // ароверяем что элемент селектора был выбран
    if (id) {
        // индентификатор соответсвует индексу в массиве
        // поэтому получаем нужный объект
        // и вызываем его метод для посчета объема
        let sizeResult = cubsArray[id].getCubSize();
        // выведем в элемент с id -- cubResult полученый результат
        cubResult.innerHTML = sizeResult;
    }
    else {
        // в случае если в селекторе не выбран элемент
        // выводим окно предупреждения alert
        alert("Не выбран куб!");
    }
}


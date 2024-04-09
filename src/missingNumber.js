function missingNumber(data) {

    // Добавляем проверки на корректность аргумента функции
    if (!arguments.length) {
        throw new Error(`Функция вызвана без аргументов`)
    }

    if (data === undefined || data === null) {
        throw new Error('Аргумент функции равен null или undefined')
    }

    if (!Array.isArray(data)) {
        throw new Error('Аргумент функции не является массивом')
    }

    if (!data.length) {
        throw new Error('Массив пуст')
    }
    if (!data.every(elem => typeof elem === 'number')) {
        throw new Error(`В массиве присутствуют не только числа`)
    }
    if (data.length === 1) {
        return 'В массиве всего один элемент'
    }

    // Сортируем копию массива, чтобы не изменить исходный массив
    const sorted = data.slice().sort((a, b) => a - b)

    // Высчитываем первый пропущенный элемент и возвращаем его. Так как нам нужен только первый элемент, мы сразу же его возвращаем,
    // без необходимости идти по массиву дальше
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] + 1 !== sorted[i + 1]) {
            return sorted[i] + 1;
        }
    }
    // Если пропущенных элементов нет, то вернем сообщение
    return 'В массиве нет пропущенных элементов';
}

module.exports = missingNumber;
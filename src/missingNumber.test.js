const missingNumber = require('./missingNumber');

describe('missingNumber function', () => {
    test('возвращает ошибку, если функция вызвана без аргументов', () => {
        expect(() => {
            missingNumber();
        }).toThrowError('Функция вызвана без аргументов');
    });

    test('возвращает ошибку, если аргумент равен null или undefined', () => {
        expect(() => {
            missingNumber(null);
        }).toThrowError('Аргумент функции равен null или undefined');

        expect(() => {
            missingNumber(undefined);
        }).toThrowError('Аргумент функции равен null или undefined');
    });

    test('возвращает ошибку, если аргумент не является массивом', () => {
        expect(() => {
            missingNumber('not an array');
        }).toThrowError('Аргумент функции не является массивом');
    });

    test('возвращает ошибку, если массив пуст', () => {
        expect(() => {
            missingNumber([]);
        }).toThrowError('Массив пуст');
    });

    test('возвращает ошибку, если в массиве присутствуют не только числа', () => {
        expect(() => {
            missingNumber([1, 2, 'not a number']);
        }).toThrowError('В массиве присутствуют не только числа');
    });

    test('возвращает сообщение о том, что в массиве всего один элемент', () => {
        expect(missingNumber([1])).toBe('В массиве всего один элемент');
    });

    test('возвращает пропущенное число в последовательности', () => {
        expect(missingNumber([5, 0, 1, 3, 2])).toBe(4);
        expect(missingNumber([7, 9, 10, 11, 12])).toBe(8);
    });

    test('возвращает сообщение о том, что в массиве нет пропущенных элементов', () => {
        expect(missingNumber([1, 2, 3])).toBe('В массиве нет пропущенных элементов');
    });
});

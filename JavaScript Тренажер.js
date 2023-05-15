// У вас есть переменные x, y и direction которые содержат входные пользовательские данные.

// Игровое поле размера от 0 до 100 по x и от 0 до 100 по y.



// x, y содержат числа - стартовая позиция игрока. 

// direction содержит направление движения, одного из: up, down, left, right.

// Напишите JavaScript код, который высчитывает новую позицию игрока после перемещения в этом направлении на 1 и записывает результат в переменную result.

// Учитывайте то, что новая позиция игрока не должна быть меньше 0 или больше 100 как x так и по y.

// Например, если новая позиция игрока больше 100 тогда, устанавливаем ему значение 100, а если новая позиция игрока меньше 0 тогда устанавливаем ему значение 0 по  x или по y в зависимости от того какую границу игрок перешел.

// Sample Input 1:

// 99 99 down
// Sample Output 1:

// x: 99, y: 100, direction: down
// Sample Input 2:

// 99 100 down
// Sample Output 2:

// x: 99, y: 100, direction: down



// -------
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', (input) => {
//     let result;
//     let [x, y, direction] = input.split(" ");

//     x = Number(x);
//     y = Number(y);

//     // -- ваш код начинается тут
//     let direction_x = direction == 'left'?-1:direction == 'right'?1:0;
//     let direction_y = direction == 'down'?1:direction == 'up'?-1:0;
//     let new_x = x + direction_x > 100? 100:x + direction_x < 0? 0: x + direction_x;
//     let new_y = y + direction_y > 100? 100:y + direction_y < 0? 0: y + direction_y;
//     result = `x: ${new_x}, y: ${new_y}, direction: ${direction}`;


//     // -- ваш код заканчивается тут

//     console.log(result);
//     rl.close();
// });


// ================================================


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', (input) => {
//     let result;
//     let n = Number(input);

//     // -- ваш код начинается тут

//     for (i = 1 ; i < n; i+=2) {
//         result += i;
//     };


//     // -- ваш код заканчивается тут

//     console.log(result);
//     rl.close();
// });


// =======================================


// У вас есть переменная str, которая содержит входные пользовательские данные.

// Напишите JavaScript код, который:

// 1. Проверяет длину строки в переменной str 

// 2. Если длина строки больше 20 символов, тогда необходимо строку обрезать и дописать в конце ...

// 3. Общая длина строки вместе с ... не должна превышать 20 символов.

// 4. Результат записывает в переменную result.

// Sample Input:

// Твоё окружение является ключом к твоей личности
// Sample Output:

// Твоё окружение яв...

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', (input) => {
//     let result;
//     let str = input;

//     // -- ваш код начинается тут

//     result = str.length < 21? str: str.slice(0, 17) + '...';

//     // -- ваш код заканчивается тут

//     console.log(result);
//     rl.close();
// });


// ==================================
// У вас есть переменная str, которая содержит входные пользовательские данные.

// Напишите JavaScript код, который выводит текст после >>> из переменной str и записывает результат в переменную result.

// Sample Input:

// >>>Привет
// Sample Output:

// Привет

// let str = '>>>Привет';
// let k = str.lastIndexOf('>')
// console.log(str.slice(k + 1,))


// =========================================


// let result;
// let str = 'Планета';
// let vowels = 0;
// let consonants = 0;

// str = str.toLowerCase();

// // -- ваш код начинается тут
// let vowelsStr = 'а,у,о,ы,э,я,ю,ё,и,е';
// let consonantsStr = 'б,в,г,д,ж,з,й,к,л,м,н,п,р,с,т,ф,х,ц,ч,ш,щ';


// for (s of str) {
//     if (consonantsStr.includes(s)) {
//         consonants++;
//     } else if (vowelsStr.includes(s)) {
//         vowels++;
//     }
// };
// result = `согласных: ${consonants}, гласных: ${vowels}`
// console.log(result)





// =================================

// У вас есть переменная str, которая содержит входные пользовательские данные.

// Напишите JavaScript код, который подсчитывает количество символов после >>> в переменной str и записывает результат в переменную result.

// Sample Input:

// >>>Привет
// Sample Output:

// 6

// let str = '>>>Привет';
// result = str.slice(str.lastIndexOf('>') + 1,).length;
// console.log(result)


// ================================

// У вас есть переменные x1, x2, x3, которые содержат входные пользовательские данные.

// Напишите JavaScript код, который находит максимальное и минимальное число из x1, x2, x3 ,
//  складывает минимальное с максимальным числом и записывает результат в переменную result.

// Sample Input 1:

// 2 1 3
// Sample Output 1:

// 4
// Sample Input 2:

// 1 3 4
// Sample Output 2:

// 5


// let x1 = 2;
// let x2 = 1;
// let x3 = 3;

// result = Math.min(x1, x2, x3) + Math.max(x1,x2,x3);
// console.log(result)



// =================================================================



// У вас есть переменная data, которая содержит входные пользовательские данные.

// В data содержится объект с фильмами:

// data = { 
//   "movies": [
//     {
//         "id": 1,
//         "title": "The Shawshank Redemption",
//         "release_year": 1994,
//         "genre": "Drama",
//         "rating": 9
//     },
//     {
//         "id": 2,
//         "title": "The Godfather",
//         "release_year": 1972,
//         "genre": "Crime",
//         "rating": 9
//     },
//     {
//         "id": 3,
//         "title": "The Godfather: Part II",
//         "release_year": 1974,
//         "genre": "Crime",
//         "rating": 9
//     },
//     {
//         "id": 4,
//         "title": "The Dark Knight",
//         "release_year": 2008,
//         "genre": "Action",
//         "rating": 9
//     },
//     {
//         "id": 5,
//         "title": "12 Angry Men",
//         "release_year": 1957,
//         "genre": "Drama",
//         "rating": 8
//     },
//     {
//         "id": 6,
//         "title": "Schindlers List",
//         "release_year": 1993,
//         "genre": "Biography",
//         "rating": 8
//     },
//     {
//         "id": 7,
//         "title": "Pulp Fiction",
//         "release_year": 1994,
//         "genre": "Crime",
//         "rating": 8
//     },
//     {
//         "id": 8,
//         "title": "The Lord of the Rings: The Return of the King",
//         "release_year": 2003,
//         "genre": "Adventure",
//         "rating": 8
//     },
//     {
//         "id": 9,
//         "title": "Fight Club",
//         "release_year": 1999,
//         "genre": "Drama",
//         "rating": 8,
//     },
//     {
//         "id": 10,
//         "title": "The Good, the Bad and the Ugly",
//         "release_year": 1966,
//         "genre": "Western",
//         "rating": 8
//     }
//   ]
// }
// Напишите JavaScript код, который выбирает заголовки фильмов и записывает их через запятую в переменную result.

// Sample Input:

// {"movies":[{"id":1,"title":"The Shawshank Redemption","release_year":1994,"genre":"Drama","rating":9,"budget":25000000},{"id":2,"title":"The Godfather","release_year":1972,"genre":"Crime","rating":9,"budget":6500000},{"id":3,"title":"The Godfather: Part II","release_year":1974,"genre":"Crime","rating":9,"budget":13000000},{"id":4,"title":"The Dark Knight","release_year":2008,"genre":"Action","rating":9,"budget":185000000},{"id":5,"title":"12 Angry Men","release_year":1957,"genre":"Drama","rating":8,"budget":350000},{"id":6,"title":"Schindlers List","release_year":1993,"genre":"Biography","rating":8,"budget":22500000},{"id":7,"title":"Pulp Fiction","release_year":1994,"genre":"Crime","rating":8,"budget":31500000},{"id":8,"title":"The Lord of the Rings: The Return of the King","release_year":2003,"genre":"Adventure","rating":8,"budget":94000000},{"id":9,"title":"Fight Club","release_year":1999,"genre":"Drama","rating":8,"budget":63000000},{"id":10,"title":"The Good, the Bad and the Ugly","release_year":1966,"genre":"Western","rating":8}]}
// Sample Output:

// The Shawshank Redemption, The Godfather, The Godfather: Part II, The Dark Knight, 12 Angry Men, Schindlers List, Pulp Fiction, The Lord of the Rings: The Return of the King, Fight Club, The Good, the Bad and the Ugly
// let result = '';

// for (i of data.movies) {
//     result += i.title + ', '
// }
// result = result.slice(0, -2) + '.'
// console.log(result)

// ANOTHER WAY

// result = data.movies.map(i => i.title).join(', ');



// ========================================
// Напишите JavaScript код, который выбирает заголовки только тех фильмов, которые были выпущены после 1990 года и записывает их через запятую в переменную result.
// result = data.movies.filter(i => i.release_year > 1990).map(i => i.title).join(', ');


// =============================================
// Напишите JavaScript код, который выбирает заголовки только тех фильмов, которые имеют рейтинг больше 8 и записывает их через запятую в переменную result.
// result = data.movies.filter(i => i.rating > 8).map(i => i.title).join(', ')


// ===============================
// Напишите JavaScript код, который считает количество тех фильмов, которые имеют рейтинг больше 8 и записывает результат в переменную result.
// result = data.movies.filter(i => i.rating > 8).map(i => i.title).length



// ======================================
// Напишите JavaScript код, который считает количество фильмов в жанре Drama, Action и записывает результат в переменную result.
// result = data.movies.filter(i => i.genre == 'Drama' || i.genre == 'Action').length


// ===========================================================

// Напишите JavaScript код, который считает количество всех фильмов кроме фильмов в жанре Drama, Crime и запишет результат в переменную result.
// result = data.movies.filter(i => i.genre != 'Drama' && i.genre != 'Crime').length



// =-===================================
// Напишите JavaScript код, который:

// 1. Добавляет новый фильм (последним в списке):

// {
//   "id": 11,
//   "title": "The Green Mile",
//   "release_year": 1999,
//   "genre": "Drama",
//   "rating": 9
// }
// 2. Выбирает заголовки фильмов (из обновленного объекта) и записывает их через запятую в переменную result.

// let film = {
//     "id": 11,
//     "title": "The Green Mile",
//     "release_year": 1999,
//     "genre": "Drama",
//     "rating": 9
//   }

//   data.movies.push(film);
//   result = data.movies.map(i => i.title).join(', ');



// ======================================================

// У вас есть переменная data, которая содержат входные пользовательские данные.

// Напишите JavaScript код, который выбирает первый элемент массива и записывает результат в переменную result.

// Sample Input:

// ["Меч", "Щит", "Свиток", "Кольцо"]
// Sample Output:

// Меч


// const data = ["Меч", "Щит", "Свиток", "Кольцо"];
// let result = data.slice(1,).join(', ');



// ===============================================================


// Напишите JavaScript код, который удаляет последний элемент массива и записывает все оставшиеся элементы массива через запятую в переменную result.
// result = data.slice(0,data.length-1).join(', ')


// =====================================================

// У вас есть переменные arr1, arr2, arr3, которые содержат входные пользовательские данные.

// Напишите JavaScript код, который объединяет три массива и записывает все элементы массива через запятую в переменную result.

// Sample Input:

// ["Меч", "Щит"] | ["Свиток"] | ["Кольцо"]
// Sample Output:

// Меч, Щит, Свиток, Кольцо

// let arr1 = ["Меч", "Щит"];
// let arr2 = ["Свиток"];
// let arr3 = ["Кольцо"];

// arr2.push(...arr3);
// result = arr1.push(...arr2);
// console.log(arr1)

// ANOTHER WAY
// result = arr1.concat(arr2).concat(arr3).join(", ");


// ==================================================

// data = [2,2,2];
// result = data.reduce((x, y) => x + y, 0)
// console.log(result)

// =========
// let A = new Set([1, 2, 3, 4]);
// let e = Number(5);

// A.add(e)
// console.log()
// =========================

// У вас есть переменная data, которая содержит входные пользовательские данные.

// Напишите JavaScript код, который создает объект с каждой парой (ключ, значение), представляющие (нижний регистр, верхний регистр) букв из массива data и записывает результат в переменную result.

// Важно!

// Данные в массиве data всегда приходят в нижнем регистре.
// Учитывайте то что ваш код должен работать как с кириллицей так и с латиницей.
// Sample Input:

// ["a", "б", "в"]
// Sample Output:

// {"a":"A","б":"Б","в":"В"}


// data = ["a", "б", "в"];

// let result = {};
// for (const iterator of data) {
//     result[iterator] = iterator.toUpperCase();
// }
// console.log(result)



// ================================================================


// У вас есть переменная data, которая содержит входные пользовательские данные.

// Напишите JavaScript код, который считает частотное распределение массива. Код должен создать объект, где ключи — это уникальные элементы, а значения — это частота появления этих элементов. Созданный объект записать в переменную result.

// Sample Input 1:

// ["A", "B", "C", "A", "A", "B"]
// Sample Output 1:

// {"A":3,"B":2,"C":1}
// Sample Input 2:

// [true, true, false, true, false]
// Sample Output 2:

// {"true":3,"false":2}



// data = ["A", "B", "C", "A", "A", "B"];

// let result = {};

// for (const iterator of data) {
//     if (result[iterator]) {
//         result[iterator] += 1;
//     } else {
//         result[iterator] = 1
//     }
// }

// console.log(result)


// another way :

// result = {};
//     for (let el of data) {
//         result[el] ? result[el] += 1 : result[el] = 1;
//     }



// ======================================



// У вас есть переменная users, которая содержит входные пользовательские данные.

// Напишите JavaScript код, который проверяет объект users, 
// находит имя самого старшего пользователя и записывает результат в переменную result.

// Sample Input:

// {"Джейн":13,"Майк":13,"Джойс":41,"Джим":42}
// Sample Output:

// Джим

// data = {"Джейн":13,"Майк":13,"Джойс":41,"Джим":42};


// result = Object.entries(data).filter(x => x.values).pop()[0];
// console.log(result)


// ANOTHER WAY
// let maxAge = 0;
//     Object.entries(users).forEach(user => {
//         if (user[1] > maxAge) {
//             maxAge = user[1];
//             result = user[0];
//         }
//     })



// Напишите JavaScript код, который проверяет объект users, находит имя самого младшего пользователя и 
// записывает результат в переменную result.

// Sample Input:

// {"Джейн":13,"Майк":14,"Джойс":41,"Джим":42}


// users  = {"Джейн":13,"Майк":14,"Джойс":41,"Джим":42}

// let result;
// let min_age = 1000;

// Object.entries(users).forEach(user => {
//     if (user[1] < min_age) {
//         min_age = user[1];
//         result = user[0];
//     }
// })

// // console.log(result)



// // ANOTHER WAY 
// result = Object.entries(users).sort((first, second) => first[1] - second[1])[0][0];

// =================================================


// У вас есть переменная data, которая содержит входные пользовательские данные.

// Напишите JavaScript код, который инвертирует ключи с значениями в объекте data и записывает новый объект в переменную result.

// Sample Input:

// {"a":"A","b":"B","c":"C"}
// Sample Output:

// {"A":"a","B":"b","C":"c"}


// data = {"a":"A","b":"B","c":"C"}

// let result = {};

// Object.entries(data).forEach(key => {
//     result[key[1]] = key[0];
// })

// console.log(result)



// ===============================================================================================



// У вас есть переменные data, key, values,  которые содержит входные пользовательские данные.

// Напишите JavaScript код, который реализует функцию whereIn, которая фильтрует объект data по заданному key/values, содержащемуся в данном массиве.

// values - это массив возможных значений для ключа key

// Результат записать в виде нового объекта в переменную result.

// Объект data

// data = [
//   {
//     name: 'Super Mario Bros.',
//     platform: 'NES',
//     releaseYear: 1985,
//     genre: 'Platformer',
//   },
//   {
//     name: 'Sonic the Hedgehog',
//     platform: 'Sega Genesis',
//     releaseYear: 1991,
//     genre: 'Platformer'
//   },
//   {
//     name: 'Donkey Kong Country',
//     platform: 'SNES',
//     releaseYear: 1994,
//     genre: 'Platformer'
//   },
//   {
//     name: 'The Legend of Zelda: Breath of the Wild',
//     platform: 'Nintendo Switch',
//     releaseYear: 2017,
//     genre: 'Action-Adventure',
//   },
//   {
//     name: 'World of Warcraft',
//     platform: 'PC',
//     releaseYear: 2004,
//     genre: 'MMORPG',
//   },
//   {
//     name: 'Fortnite',
//     platform: 'Multi-platform',
//     releaseYear: 2017,
//     genre: 'Battle Royale',
//   },
//   {
//     name: 'The Witcher 3: Wild Hunt',
//     platform: 'Multi-platform',
//     releaseYear: 2015,
//     genre: 'Action RPG',
//   },
//   {
//     name: 'Overwatch',
//     platform: 'Multi-platform',
//     releaseYear: 2016,
//     genre: 'First-person Shooter',
//   },
//   {
//     name: 'Minecraft',
//     platform: 'Multi-platform',
//     releaseYear: 2011,
//     genre: 'Sandbox',
//   },
//   {
//     name: 'Terraria',
//     platform: 'Multi-platform',
//     releaseYear: 2011,
//     genre: 'Sandbox'
//   },
//   {
//     name: 'Stardew Valley',
//     platform: 'Multi-platform',
//     releaseYear: 2016,
//     genre: 'Sandbox'
//   },
//   {
//     name: 'League of Legends',
//     platform: 'PC',
//     releaseYear: 2009,
//     genre: 'MOBA',
//   }
// ]


// function whereIn(data, keys, values) {
//     let res = [];
//     for (value of values) {
//         for (d of data) {
//         if (d[keys] && d[keys] == value)
//             if (!res[d]) {
//                 res.push(d)
//             }
//         }
//     }
    
//     return res
// }

// let result = whereIn(data, 'name' , ["Fortnite"]);

// console.log(result)


// ANOTHER WAY 
// function whereIn(data, key, values) {
//     let res = data.filter((item) => values.includes(item[key]))
//     return res
// }




// У вас есть переменные data, key, values,  которые содержит входные пользовательские данные.

// Напишите JavaScript код, который реализует функцию whereNotIn, которая фильтрует объект data по заданному key/values, не содержащемуся в данном массиве.

// values - это массив возможных значений для ключа key

// Результат записать в виде нового объекта в переменную result.

// Объект data

// data = [
//   {
//     name: 'Super Mario Bros.',
//     platform: 'NES',
//     releaseYear: 1985,
//     genre: 'Platformer',
//   },
//   {
//     name: 'Sonic the Hedgehog',
//     platform: 'Sega Genesis',
//     releaseYear: 1991,
//     genre: 'Platformer'
//   },
//   {
//     name: 'Donkey Kong Country',
//     platform: 'SNES',
//     releaseYear: 1994,
//     genre: 'Platformer'
//   },
//   {
//     name: 'The Legend of Zelda: Breath of the Wild',
//     platform: 'Nintendo Switch',
//     releaseYear: 2017,
//     genre: 'Action-Adventure',
//   },
//   {
//     name: 'World of Warcraft',
//     platform: 'PC',
//     releaseYear: 2004,
//     genre: 'MMORPG',
//   },
//   {
//     name: 'Fortnite',
//     platform: 'Multi-platform',
//     releaseYear: 2017,
//     genre: 'Battle Royale',
//   },
//   {
//     name: 'The Witcher 3: Wild Hunt',
//     platform: 'Multi-platform',
//     releaseYear: 2015,
//     genre: 'Action RPG',
//   },
//   {
//     name: 'Overwatch',
//     platform: 'Multi-platform',
//     releaseYear: 2016,
//     genre: 'First-person Shooter',
//   },
//   {
//     name: 'Minecraft',
//     platform: 'Multi-platform',
//     releaseYear: 2011,
//     genre: 'Sandbox',
//   },
//   {
//     name: 'Terraria',
//     platform: 'Multi-platform',
//     releaseYear: 2011,
//     genre: 'Sandbox'
//   },
//   {
//     name: 'Stardew Valley',
//     platform: 'Multi-platform',
//     releaseYear: 2016,
//     genre: 'Sandbox'
//   },
//   {
//     name: 'League of Legends',
//     platform: 'PC',
//     releaseYear: 2009,
//     genre: 'MOBA',
//   }
// ]



// function whereIn(data, key, values) {
//     let res = [];
//     let res = data.filter((item) => !values.includes(item[key]))
//     return res
// }

// let result = whereIn(data, 'name' , ["Fortnite"]);

// console.log(result)


// ====================================================================
// У вас есть переменные data, key, values,  которые содержит входные пользовательские данные.

// Напишите JavaScript код, который реализует функцию whereBetween, которая фильтрует объект data по заданному key/values, содержащемуся в данном массиве.

// values - это массив диапазонов значений (начало - конец) для ключа key

// Результат записать в виде нового объекта в переменную result.

// Объект data

// data = [
//   {
//     name: 'Super Mario Bros.',
//     platform: 'NES',
//     releaseYear: 1985,
//     genre: 'Platformer',
//   },
//   {
//     name: 'Sonic the Hedgehog',
//     platform: 'Sega Genesis',
//     releaseYear: 1991,
//     genre: 'Platformer'
//   },
//   {
//     name: 'Donkey Kong Country',
//     platform: 'SNES',
//     releaseYear: 1994,
//     genre: 'Platformer'
//   },
//   {
//     name: 'The Legend of Zelda: Breath of the Wild',
//     platform: 'Nintendo Switch',
//     releaseYear: 2017,
//     genre: 'Action-Adventure',
//   },
//   {
//     name: 'World of Warcraft',
//     platform: 'PC',
//     releaseYear: 2004,
//     genre: 'MMORPG',
//   },
//   {
//     name: 'Fortnite',
//     platform: 'Multi-platform',
//     releaseYear: 2017,
//     genre: 'Battle Royale',
//   },
//   {
//     name: 'The Witcher 3: Wild Hunt',
//     platform: 'Multi-platform',
//     releaseYear: 2015,
//     genre: 'Action RPG',
//   },
//   {
//     name: 'Overwatch',
//     platform: 'Multi-platform',
//     releaseYear: 2016,
//     genre: 'First-person Shooter',
//   },
//   {
//     name: 'Minecraft',
//     platform: 'Multi-platform',
//     releaseYear: 2011,
//     genre: 'Sandbox',
//   },
//   {
//     name: 'Terraria',
//     platform: 'Multi-platform',
//     releaseYear: 2011,
//     genre: 'Sandbox'
//   },
//   {
//     name: 'Stardew Valley',
//     platform: 'Multi-platform',
//     releaseYear: 2016,
//     genre: 'Sandbox'
//   },
//   {
//     name: 'League of Legends',
//     platform: 'PC',
//     releaseYear: 2009,
//     genre: 'MOBA',
//   }
// ]

// function whereIn(data, key, values) {
//     let res = [];
//     let [a, b] = values
//     for (obj of Object.values(data)) {
//         if (obj[key] && obj[key] >= a && obj[key] <= b) {
//             res.push(obj);
//         }};
    
//     return res
//     }
    
    



// let result = whereIn(data, 'releaseYear'  , [1990, 1999]);

// console.log(result)



// ANOTHER WAY 
// function whereBetween(data, key, values) {
//     let res = data.filter((item) => item[key] >= values[0] && item[key] <= values[1])
//     return res




// ==============================================================




// У вас есть переменные data, key, value,  которые содержит входные пользовательские данные.

// Напишите JavaScript код, который реализует функцию whereContains, которая фильтрует объект data по заданному key/value, содержащемуся в данном массиве.

// value - это искомая строка для значений ключа key

// Результат записать в виде нового объекта в переменную result.

// Важно! регистр value неважен.

// Объект data

// data = [
//   {
//     name: 'Super Mario Bros.',
//     platform: 'NES',
//     releaseYear: 1985,
//     genre: 'Platformer',
//   },
//   {
//     name: 'Sonic the Hedgehog',
//     platform: 'Sega Genesis',
//     releaseYear: 1991,
//     genre: 'Platformer'
//   },
//   {
//     name: 'Donkey Kong Country',
//     platform: 'SNES',
//     releaseYear: 1994,
//     genre: 'Platformer'
//   },
//   {
//     name: 'The Legend of Zelda: Breath of the Wild',
//     platform: 'Nintendo Switch',
//     releaseYear: 2017,
//     genre: 'Action-Adventure',
//   },
//   {
//     name: 'World of Warcraft',
//     platform: 'PC',
//     releaseYear: 2004,
//     genre: 'MMORPG',
//   },
//   {
//     name: 'Fortnite',
//     platform: 'Multi-platform',
//     releaseYear: 2017,
//     genre: 'Battle Royale',
//   },
//   {
//     name: 'The Witcher 3: Wild Hunt',
//     platform: 'Multi-platform',
//     releaseYear: 2015,
//     genre: 'Action RPG',
//   },
//   {
//     name: 'Overwatch',
//     platform: 'Multi-platform',
//     releaseYear: 2016,
//     genre: 'First-person Shooter',
//   },
//   {
//     name: 'Minecraft',
//     platform: 'Multi-platform',
//     releaseYear: 2011,
//     genre: 'Sandbox',
//   },
//   {
//     name: 'Terraria',
//     platform: 'Multi-platform',
//     releaseYear: 2011,
//     genre: 'Sandbox'
//   },
//   {
//     name: 'Stardew Valley',
//     platform: 'Multi-platform',
//     releaseYear: 2016,
//     genre: 'Sandbox'
//   },
//   {
//     name: 'League of Legends',
//     platform: 'PC',
//     releaseYear: 2009,
//     genre: 'MOBA',
//   }
// ]

// function whereContains(data, key, value) {
//     let res = [];
//     res = data.filter((item) => item[key].toLowerCase().includes(value.toLowerCase()))
//     return res
// }

// result = whereContains(data, 'name', 'the')
// console.log(result)

// =============================================================

// У вас есть переменные data, key,  которые содержит входные пользовательские данные.

// Напишите JavaScript код, который реализует функцию whereNull, которая фильтрует элементы объекта  data , для которых данный ключ имеет значение null.

// Результат записать в виде нового объекта в переменную result.

// Объект data

// const data = [
//   { id: 1, name: "John", age: 25, email: "john@gmail.com" },
//   { id: 2, name: "Jane", age: null, email: "jane@gmail.com" },
//   { id: 3, name: "Bob", age: 35, email: null },
//   { id: 4, name: null, age: 40, email: "bob@gmail.com" },
//   { id: 5, name: "Alice", age: 30, email: "alice@gmail.com" }
// ];



// function whereNull(data, key) {
//     let res;
//     res = data.filter((item) => item[key] == null)
//     return res
// }


// let result = whereNull(data, 'email')
// console.log(result)


// ========================================================================


У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который определяет все ли числа в массиве data четные и записывает логический результат в переменную result.

Sample Input 1:

[2, 4, 6, 8, 10]
Sample Output 1:

true
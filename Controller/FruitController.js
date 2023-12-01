/**
 * TODO 3:
 * - import fruits dari data/fruits.js
 * - refactor variable ke ES6 variable
 */
const fruits = require('../data/data');

/**
 * TODO 4: Buat method index
 * - Untuk menampilkan semua data
 * - refactor function ke ES6 Arrow Function
 * - () untuk menaruh parameter
 */
const index = () => {
    
    // menggunakan perulangan for of
    // for of digunakan untuk array
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

// index();

/**
 * TODO 5: Buat method store
 * - Untuk menambahkan data buah
 * - refactor function ke ES6 Arrow Function
 * 
 * @param {string} name - nama buah yang baru
 * 
 * @hint - Gunakan Array Push
 */
const store = (name) => {
    fruits.push(name);

    console.log(`\nMethod store - Menambahkan buah ${name}`);
    index();
}

// store('Pisang');

/**
 * TODO 6: Buat method update
 * - Untuk mengedit data buah
 * - refactor function ke ES6 Arrow Function
 * 
 * @param {number} position - index yang ingin diupdate
 * @param {string} name - nama buah yang baru
 */
const update = (position, name) => {
    fruits[position] = name;

    console.log(`\nMethod update - Update data ${position} menjadi ${name}`);
    index();
}

// update(0, 'Kelapa');

/**
 * TODO 7: Buat method destroy
 * - Untuk menghapus data buah
 * - refactor function ke ES6 Arrow Function
 * - array.splice(index, howmany)
 * 
 * @param {number} position - index yang ingin dihapus
 * 
 * @hint - Gunakan Array Splice
 */
const destroy = (position) => {
    fruits.splice(position, 1);

    console.log(`\nMethod destroy - Menghapus data ${position}`);
    index();
}

// destroy(0);

/**
 * TODO 8: export semua method
 */
module.exports = {index, store, update, destroy};

// console.log(module.exports);
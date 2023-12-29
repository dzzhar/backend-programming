// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  // method static all
  // menampilkan seluruh data students
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      // query all
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  // method static create
  // menambah data student
  static async create(data) {
    // Promise 1: melakukan insert data ke database
    const id = await new Promise((resolve, reject) => {
      // query create
      const sql = "INSERT INTO students SET ?";

      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    // Promise 2: melakukan query berdasarkan id
    const student = this.find(id);
    return student;
  }

  // method static find
  // mencari data berdasarkan id
  static find(id) {
    return new Promise((resolve, reject) => {
      // query find
      const sql = "SELECT * FROM students WHERE id = ?";

      db.query(sql, id, (err, results) => {
        // destructing array
        const [student] = results;
        resolve(student);
      });
    });
  }

  // method static update
  // mengupdate data student
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      // query update
      const sql = "UPDATE students SET ? WHERE id = ?";

      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // mencari data yang baru diupdate
    const student = await this.find(id);
    return student;
  }

  // method static delete
  // menghapus data student
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";

      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  // method static find
  // melihat detail data student
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";

      db.query(sql, id, (err, results) => {
        const [student] = results;
        resolve(student);
      });
    });
  }
}

// export class Student
module.exports = Student;

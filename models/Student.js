// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  // method static all
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
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
  static async create(data) {
    // return Promise
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";

      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    /**
     * refactor
     * - get data by id
     */
    const student = this.find(id);
    return student;
  }

  // method static find
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";

      db.query(sql, id, (err, results) => {
        // desctructing array
        const [student] = results;
        resolve(student);
      });
    });
  }

  // method static update
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";

      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // find data results update
    const student = await this.find(id);
    return student;
  }

  // method static delete
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";

      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  // method static find
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

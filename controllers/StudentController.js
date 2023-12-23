// Import Model Student
const Student = require("../models/Student.js");

// membuat class StudentController
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await
    const students = await Student.all();

    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.json(data);
  }

  // method store
  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru di insert
     * Mengembalikan response dalam bentuk json
     */

    // ambil data student sebagai req.body
    const { nama, nim, email, jurusan } = req.body;

    // buat objek baru -> student
    const input = { nama, nim, email, jurusan };

    // memanggil method static create dengan async await
    const students = await Student.create(input);

    const data = {
      message: `Menambahkan data student ${nama}`,
      data: input,
    };

    res.json(data);
  }

  // method update
  update(req, res) {
    // TODO 6: Update data students
    const { id } = req.params;
    const { nama } = req.body;

    students[id] = nama;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: students,
    };

    res.json(data);
  }

  // method delete
  destroy(req, res) {
    // TODO 7: Hapus data students
    const { id } = req.params;

    students.splice(id, 1);

    const data = {
      message: `Menghapus student id ${id}`,
      data: students,
    };

    res.json(data);
  }
}

// membuat object StudentController
const object = new StudentController();

// export object StudentCOntroller
module.exports = object;

// Import Model Student
const Student = require("../models/Student.js");

// membuat class StudentController
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await
    const students = await Student.all();

    /**
     * refactor
     * - menghandle jika data kosong
     * - menggunakan handle short if else
     *
     * mysql
     * - TRUNCATE TABLE table_name -> hapus data table permanen
     */
    if (students.length > 0) {
      const data = {
        message: "Menampilkan Semua Students",
        data: students,
      };

      return res.status(200).json(data);
    }

    // else
    const data = {
      message: `Student is Empty`,
    };

    return res.status(200).json(data);
  }

  // method store
  async store(req, res) {
    /**
     * validasi sederhana
     * - handle jika salah satu data tidak terkirim
     */

    // destructing object req.body
    const { nama, nim, email, jurusan } = req.body;

    // jika data undefined maka kirim response error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua Data Harus Dikirim",
      };

      return res.status(422).json(data);
    }

    /**
     * else
     * - memanggil method create dari Model Student
     */
    const student = await Student.create(req.body);

    const data = {
      message: `Menambahkan data student`,
      data: student,
    };

    return res.status(201).json(data);
  }

  // method update
  async update(req, res) {
    const { id } = req.params;

    // cari id student yang ingin di update
    const student = await Student.find(id);

    // data checking
    if (student) {
      const student = await Student.update(id, req.body);

      const data = {
        message: `Mengedit data students`,
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Students not found`,
      };

      res.status(404).json(data);
    }
  }

  // method delete
  async destroy(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data student`,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };

      res.status(404).json(data);
    }
  }

  // method show
  async show(req, res) {
    const { id } = req.params;

    // Find student by id
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Menampilkan detail student`,
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };

      res.status(404).json(data);
    }
  }
}

// membuat object StudentController
const object = new StudentController();

// export object StudentCOntroller
module.exports = object;

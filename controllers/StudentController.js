// Import Model Student
const Student = require("../models/Student.js");

// membuat class StudentController
class StudentController {
  // method index
  async index(req, res) {
    const students = await Student.all();

    /**
     * refactor
     * - menghandle jika data kosong
     * - menggunakan handle short if else
     */
    if (students.length > 0) {
      const data = {
        message: "Get All Resources",
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
    // handle validasi

    // jika salah satu data kosong, kirim response.error
    const { nama, nim, email, jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "All fields must be filled correctly",
      };

      return res.status(422).json(data);
    }

    // cek jika nim bukan berupa angka
    else if (isNaN(nim)) {
      const data = {
        message: `NIM fields must be integer`,
      };

      return res.status(422).json(data);
    }

    // else
    const student = await Student.create(req.body);

    const data = {
      message: `Resources is Added Successfully`,
      data: student,
    };

    return res.status(201).json(data);
  }

  // method show
  async show(req, res) {
    const { id } = req.params;

    // Find student by id
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Get Detail Resource`,
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Resources Not Found`,
      };

      res.status(404).json(data);
    }
  }

  // method update
  async update(req, res) {
    const { id } = req.params;

    // cari id student yang ingin di update
    const student = await Student.find(id);

    // jika data tersedia lakukan update
    if (student) {
      const student = await Student.update(id, req.body);

      const data = {
        message: `Resources is Update Successfully`,
        data: student,
      };

      res.status(200).json(data);
    }

    // jika tidak, kirim data tidak ada
    else {
      const data = {
        message: `Resource Not Found`,
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
        message: `Resource is Deleted Successfully`,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      res.status(404).json(data);
    }
  }
}

// membuat object StudentController
const object = new StudentController();

// export object StudentCOntroller
module.exports = object;

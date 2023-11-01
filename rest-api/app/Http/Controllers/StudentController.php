<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // membuat method index
    public function index()
    {
        // mendapatkan semua data students
        $students = Student::all();

        $data = [
            "message" => "Get All Resources",
            "data" => $students
        ];

        // kirim data (json) dan response code (200)
        // status code sangat dibutuhkan oleh front-end
        return response()->json($data, 200);
    }

    // membuat method store
    public function store(Request $request)
    {
        // menangkap data request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        // menggunakan model Student untuk insert data
        $students = Student::create($input);

        $data = [
            "message" => "Student Created Succesfully",
            "data" => $students
        ];

        // mengembalikan data (json) dan response code
        return response()->json($data, 201);
    }

    // membuat method update
    public function update($id, Request $request)
    {
        // mencari data dengan $id menggunakan model Student
        $students = Student::find($id);

        // mengupdate data dengan fungsi update
        $students->update([
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ]);

        $data = [
            "message" => "Data Updated Succesfully",
            "data" => $students
        ];

        // mengembalikan data (json) dan response code
        return response()->json($data, 200);
    }

    // membuat method destroy
    public function destroy($id)
    {
        // mencari data dengan $id menggunakan model Student
        $students = Student::find($id);

        // menghapus data dengan fungsi delete
        $students->delete();

        $data = [
            "message" => "Data Deleted Succesfully"
        ];

        // mengembalikan data (json) dan response code
        return response()->json($data, 200);
    }
}

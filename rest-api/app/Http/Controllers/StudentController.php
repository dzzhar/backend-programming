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

        // jika data kosong maka kirim status code 304
        if ($students->isEmpty()) {
            $data = [
                "message" => "Resources is Empty"
            ];

            return response()->json($data, 204);
        }

        $data = [
            "message" => "Get All Resources",
            "data" => $students
        ];

        // kirim data (json) dan status code (200)
        // status code sangat dibutuhkan oleh front-end
        return response()->json($data, 200);
    }


    // membuat method show
    public function show($id)
    {
        // mencari data dengan $id menggunakan model Student
        $students = Student::find($id);

        if ($students) {
            $data = [
                'message' => 'Show Detail Student',
                'data' => $students
            ];

            // mengembalikan data (json) dan kode 200
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data Not Found'
            ];

            // mengembalikan data (json) dan kode 404
            return response()->json($data, 404);
        }
    }


    // membuat method store
    public function store(Request $request)
    {
        // validasi data request
        $request->validate([
            "nama" => "required",
            "nim" => "required",
            "email" => "required|email",
            "jurusan" => "required"
        ]);

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

        // mengembalikan data (json) dan status code
        return response()->json($data, 201);
    }


    // membuat method update
    public function update($id, Request $request)
    {
        // mencari data dengan $id menggunakan model Student
        $students = Student::find($id);

        // mengupdate data dengan fungsi update
        if ($students) {

            // menangkap data request
            $input = [
                'nama' => $request->nama ?? $students->nama,
                'nim' => $request->nim ?? $students->nim,
                'email' => $request->email ?? $students->email,
                'jurusan' => $request->jurusan ?? $students->jurusan
            ];

            // melakukan update data
            $students->update($input);

            $data = [
                "message" => "Student is Updated",
                "data" => $students
            ];

            // mengembalikan data (json) dan status code
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student Not Found'
            ];

            // mengembalikan data (json) dan status code
            return response()->json($data, 404);
        }
    }


    // membuat method destroy
    public function destroy($id)
    {
        // mencari data dengan $id menggunakan model Student
        $students = Student::find($id);

        if ($students) {

            // menghapus data dengan fungsi delete
            $students->delete();

            $data = [
                "message" => "Student is Deleted"
            ];

            // mengembalikan data (json) dan status code
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student Not Found'
            ];

            return response()->json($data, 404);
        }
    }
}

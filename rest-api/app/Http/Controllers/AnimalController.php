<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // property animal
    public $animals = ["Beruang", "Bebek"];

    // method untuk menampilkan hewan
    public function index()
    {
        echo "Menampilkan data animals <br>";

        // loop property animals
        foreach ($this->animals as $animal) {
            echo "- $animal <br>";
        }
    }

    // method untuk menambahkan data hewan
    public function store(Request $request)
    {
        echo "Menambahkan hewan baru <br>";

        // menambahkan data ke property animals
        array_push($this->animals, $request->animal);

        // memanggil method index
        $this->index();
    }

    // method untuk mengupdate data hewan
    public function update($id, Request $request)
    {
        echo "Mengupdate data hewan id $id <br>";

        // mengupdate data di property animals
        $this->animals[$id] = $request->animal;

        // memanggil method index
        $this->index();
    }

    // method untuk menghapus data hewan
    public function destroy($id)
    {
        echo "Menghapus data hewan id $id <br>";

        // menghapus data di property animals
        unset($this->animals[$id]);

        // memanggil method index
        $this->index();
    }
}

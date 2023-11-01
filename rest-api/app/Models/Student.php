<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    // mendefinisikan atribut untuk dapat diisi secara massal
    protected $fillable = ['nama', 'nim', 'email', 'jurusan'];
}

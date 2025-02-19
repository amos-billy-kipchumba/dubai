<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Job;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $query = Job::query();

        if ($request->has('search')) {
            $search = trim($request->input('search'));

            $query->where(function ($q) use ($search) {
                $q->where('title', 'LIKE', "%$search%")
                  ->orWhere('company_name', 'LIKE', "%$search%")
                  ->orWhere('location', 'LIKE', "%$search%")
                  ->orWhere('job_type', 'LIKE', "%$search%")
                  ->orWhere('salary_min', 'LIKE', "%$search%")
                  ->orWhere('salary_max', 'LIKE', "%$search%");
            });
        }

        $query->orderBy('created_at', 'desc');
        $jobs = $query->paginate(10);

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'jobs' => $jobs,
            'flash' => session('flash'),
        ]);
    }

    public function showJob(Job $job)
    {
        return Inertia::render('Jobs/Joby', [
            'job' => $job
        ]);
    }
}


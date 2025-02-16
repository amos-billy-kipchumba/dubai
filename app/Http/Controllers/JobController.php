<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreJobRequest;
use App\Http\Requests\UpdateJobRequest;
use App\Models\Job;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JobController extends Controller
{

    public function index(Request $request)
    {
        $user = Auth::user();
    
        $query = Job::with('user');
    
        if ($user->role_id == 2) {
            $query->whereHas('user', function ($q) use ($user) {
                $q->where('company_id', '=', $user->company_id);
            });
        } elseif ($user->role_id == 3) {
            $query->where('user_id', '=', $user->id);
        }
    
        if ($request->has('search')) {
            $search = $request->input('search');
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'LIKE', "%$search%")
                  ->orWhere('email', 'LIKE', "%$search%");
            });
        }

        $query->orderBy('created_at', 'desc');
    
        $jobs = $query->paginate(10);
    
        return Inertia::render('Jobs/Index', [
            'jobs' => $jobs->items(),
            'pagination' => $jobs,
            'flash' => session('flash'),
        ]);
    }
    

    public function create()
    {
        $jobs = Job::all();
        $users = User::all();

        return Inertia::render('Jobs/Create', [
            'jobs' => $jobs,
            'users'=> $users
        ]);
    }

    public function store(StoreJobRequest $request)
    {
        Job::create($request->validated());

        return redirect()->route('jobs.index')->with('success', 'Job created successfully.');
    }


    public function show(Job $job)
    {
        return Inertia::render('Jobs/Show', [
            'job' => $job,
        ]);
    }

    public function edit(Job $job)
    {
        $jobs = Job::all();
        $users = User::all();

        return Inertia::render('Jobs/Edit', [
            'job' => $job,
            'jobs' => $jobs,
            'users'=>$users
        ]);
    }

    public function update(UpdateJobRequest $request, Job $job)
    {
        $job->update($request->validated());

        return redirect()->route('jobs.index')->with('success', 'Job updated successfully.');
    }


    public function destroy(Job $job)
    {
        $job->delete();

        return redirect()->route('jobs.index')->with('success', 'Job deleted successfully.');
    }
}

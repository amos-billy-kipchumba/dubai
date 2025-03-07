<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\LoanProviderController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\RepaymentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::post('/send-comment', [ProfileController::class, 'sendComment'])->name('profile.sendComment');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/joby/{job}', [HomeController::class, 'showJob'])->name('jobShow');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('companies', CompanyController::class);
    Route::get('/companies/list', [CompanyController::class, 'list'])->name('companies.list');

    
    Route::resource('loans', LoanController::class);
    Route::get('/loans/{loan}/approve', [LoanController::class, 'approve'])->name('loans.approval');
    Route::post('/loans/{loan}/loanApproval', [LoanController::class, 'approveLoan'])->name('loans.approveLoan');
    Route::post('/loans/bulk-update', [LoanController::class, 'bulkUpdate'])->name('loans.bulkUpdate');
    Route::resource('loanProviders', LoanProviderController::class);
    Route::resource('notifications', NotificationController::class);
    Route::resource('repayments', RepaymentController::class);
    Route::resource('users', UserController::class);
    Route::resource('jobs', JobController::class);
    Route::resource('applications', ApplicationController::class);
});

Route::resource('employees', EmployeeController::class);
Route::get('/companies/{company}/employees', [EmployeeController::class, 'getEmployeesByCompany'])
    ->name('company.employees');

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::get('/uikit/button', function () {
    return Inertia::render('main/uikit/button/page');
})->name('button');





require __DIR__.'/auth.php';

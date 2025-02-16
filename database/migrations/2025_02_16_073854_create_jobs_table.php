<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('image')->nullable();
            $table->string('company_name')->nullable();
            $table->string('location')->nullable();
            $table->string('job_type')->nullable();
            $table->decimal('salary_min', 10, 2)->nullable();
            $table->decimal('salary_max', 10, 2)->nullable();
            $table->text('description')->nullable();
            $table->text('required_qualifications')->nullable();
            $table->text('preferred_qualifications')->nullable();
            $table->date('application_deadline')->nullable();
            $table->string('application_method')->nullable();
            $table->string('company_website')->nullable();
            $table->string('benefits')->nullable();
            $table->string('industry')->nullable();
            $table->string('experience_level')->nullable();
            $table->string('work_schedule')->nullable();
            $table->string('hiring_manager_contact')->nullable();
            $table->text('company_culture')->nullable();
            $table->text('interview_process')->nullable();
            $table->date('posting_date')->nullable();
            $table->string('job_reference')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};

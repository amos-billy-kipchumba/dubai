<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .content {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>New User Registration</h1>
    <p>Name: {{ $user->name }}</p>
    <p>Email: {{ $user->email }}</p>
    <p>Phone: {{ $user->phone }}</p>
    <p>Date of Birth: {{ $user->date_of_birth }}</p>
    <p>Nationality: {{ $user->nationality }}</p>
    <p>Current Location: {{ $user->current_location }}</p>
    <p>Position: {{ $user->position }}</p>
    <p>Education: {{ $user->education }}</p>
    <p>Languages: {{ $user->languages }}</p>
    <p>References: {{ $user->references }}</p>
    
    <p>CV and Certificate of good conduct are attached.</p>

    <p><strong>The LinkPath Team</strong></p>
</body>
</html>

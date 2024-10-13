<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate the inputs
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Check if all fields are filled
    if (empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Prepare email content
    $to = 'your_email@example.com'; // Your email address
    $email_subject = "New Contact Form Submission: " . $subject;
    $email_body = "Email: $email\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Message:\n$message\n";

    // Send email
    $headers = "From: $email";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Form submitted successfully!";
    } else {
        echo "Failed to submit form. Please try again later.";
    }
} else {
    // Not a POST request, handle the error
    echo "Invalid request.";
}
?>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;



$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$recaptcha_secret = $_ENV['RECAPTCHA_SECRET_KEY'];
$json_data = json_decode(file_get_contents('php://input'), true);

$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_response = $json_data['recaptchaToken'];

$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
$recaptcha = json_decode($recaptcha);



if ($recaptcha->success == false) {
    echo json_encode(["status" => "ERROR: reCAPTCHA failed", "error" => $recaptcha->{"error-codes"}]);
    exit();
}

if ($recaptcha->score < 0.5) {
    echo json_encode(["status" => "ERROR: reCAPTCHA failed"]);
    exit();
}


$mail = new PHPMailer(true);

header('Content-Type: application/json');

try {
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['GMAIL_USER'];
    $mail->Password = $_ENV['GMAIL_PASS'];
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($_ENV['GMAIL_USER'], 'dfruzsiphoto');
    $mail->addAddress('dfruzsiphoto@gmail.com', 'dfruzsiphoto');

    $mail->isHTML(true);
    $mail->Subject = 'fruzsiphoto.hu';
    $mail->Body = "<b>Név:</b> {$json_data['name']}<br><br><b>E-mail cím:</b> {$json_data['email']}<br><br><b>Fotó fajtája:</b> {$json_data['photoType']}<br><br><b>Üzenet:</b> {$json_data['message']}";

    $mail->send();
    echo json_encode(["status" => "Message Sent"]);
} catch (Exception $e) {
    echo json_encode(["status" => "ERROR", "message" => $e->getMessage()]);
}

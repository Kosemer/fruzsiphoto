<?php
require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

echo 'RECAPTCHA_SECRET_KEY: ' . $_ENV['RECAPTCHA_SECRET_KEY'] . '<br>';
echo 'GMAIL_USER: ' . $_ENV['GMAIL_USER'] . '<br>';
echo 'GMAIL_PASS: ' . $_ENV['GMAIL_PASS'] . '<br>';

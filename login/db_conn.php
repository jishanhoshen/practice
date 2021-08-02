<?php
$sName = "remotemysql.com";
$uName = "sKufZOOryi";
$pass = "nBOXjzqGDs";
$db_name = "sKufZOOryi";

$conn = new mysqli($sName, $uName, $pass, $db_name);
if ($conn->connect_error) {
    die("Connection failed : " . $conn->connect_error);
}

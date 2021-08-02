<?php
$servername = "remotemysql.com";
$username = "sKufZOOryi";
$password = "nBOXjzqGDs";
$database = "sKufZOOryi";
$conn = new mysqli($servername,$username,$password,$database);
if ($conn->connect_error) {
    die("error".$conn->connect_error);
}
<?php
$con = mysqli_connect("127.0.0.1", "root", "", "yaofangwang");
$num = $_REQUEST["num"];
$price = $_REQUEST["price"];
$goodid = $_REQUEST["goodid"];
$total = $_REQUEST["total"];

   $updateSql = "UPDATE cart SET num=$num,total=$total WHERE goodid=' $goodid'";
   mysqli_query($con, $updateSql);
?>
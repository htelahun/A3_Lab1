<?php
$user='root';
$pass='';// $pass='root'; mac only
$host='localhost';
$db='a3_cooperInfo';//data base your connecting to

//try connecting to the server
$conn = mysqli_connect($host,$user,$pass,$db);

mysqli_set_charset($conn, 'utf8');

if(!$conn){
  echo 'somethings wrong';
  exit;
}

//echo "connected";
//store the query, run the query, display the results
$myQuery = "SELECT * FROM mainmodel";
$result = mysqli_query($conn,$myQuery);
$rows = array ();

while ($row = mysqli_fetch_assoc($result)) {
$rows [] = $row;
}

//var_dump($rows);
//echo json_encode($rows);
if (isset($_GET["carModel"])){
  $car = $_GET["carModel"];
  // select one car instead of all of them
  $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
  //store the results
  $result = mysqli_query($conn,$myQuery);
  //get the row
  $row = mysqli_fetch_assoc($result);
  //show on the webpage
  echo json_encode($row);
}
?>

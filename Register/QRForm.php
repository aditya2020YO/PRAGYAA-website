<?php

	$name = $_POST['Name'];
	$surname = $_POST['Surname'];
	$Age = $_POST['Age'];
	$Gender = $_POST['Gender'];

	$city = $_POST['City'];
	$district = $_POST['District'];
	$college = $_POST['College'];
	$Event = $_POST['Event'];
	
	$email = $_POST['Email'];
	$contact = $_POST['Phone'];

	$noTM = $_POST['noTM'];
	$leader = $_POST['Leader'];

	$members = $_POST['Members'];
 	
 	
//////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////*/

	session_start();
	$_SESSION['Name'] = $name;
	$_SESSION['Surname'] = $surname;
	$_SESSION['Age'] = $Age;
	$_SESSION['Gender'] = $Gender;
	$_SESSION['City'] = $city;
	$_SESSION['District'] = $district;
	$_SESSION['College'] = $college;
	$_SESSION['Event'] = $Event;
	$_SESSION['Email'] = $email;
	$_SESSION['Contact'] = $contact;
	$_SESSION['noTM'] = $noTM;
	$_SESSION['Leader'] = $leader;
	$_SESSION['Members'] = $members;

	header("Location: QR.html ");
?>












 
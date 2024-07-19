<?php
	$transaction = $_POST['Transaction'];

	session_start();
	$name = $_SESSION['Name'];
	$surname = $_SESSION['Surname'];
	$Age = $_SESSION['Age'];
	$Gender = $_SESSION['Gender'];
	$city = $_SESSION['City'];
	$district = $_SESSION['District'];
	$college = $_SESSION['College'];
	$Event = $_SESSION['Event'];
	$email = $_SESSION['Email'];
	$contact = $_SESSION['Contact'];
	$noTM = $_SESSION['noTM'];
	$leader = $_SESSION['Leader'];
	$members = $_SESSION['Members'];

	$conn = mysqli_connect("localhost", "root", "","Pragyaa") or die("Connection Failed");

	if(!$conn){
			die("Sorry Failed to connect : ". mysqli_connect_error());
		}
		else{
			echo "connection successfull <br>";
		}

$query = "INSERT INTO `registrationform` ( `First Name`, `Last Name`, `Age`, `Gender`, `City`, `District`, `College`, `Events`, `Email`, `ContactNo`, `Leader`, `Members`,  `MembersName`, `TransactionId`) VALUES ('$name','$surname','$Age','$Gender','$city','$district','$college','$Event','$email','$contact','$noTM','$leader','$members','TransactionId');";


	$result = mysqli_query($conn,$query) or die(mysqli_error());

	if($result) {
					echo "<br>Form Submitted Successfully<br>";
			}
			else{
					echo "<br>Form not Submitted because : ". mysqli_error($conn);
			}
?> 
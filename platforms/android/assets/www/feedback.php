<?php
		// $full_name =  $_POST['full_name'];
		// $location =  $_POST['location'];
		// $message =  $_POST['message'];
		$full_name =  "boss";
	$location =  "boss";
	$message =  "boss";
	$mess = 'Name: '.$full_name.'<br>'.'Location: '.$location.'<br>'.'Message: '.$message;
		$mail = mail('phemzyoflife@gmail.com', 'Feedback', $mess);
			if ($mail){
				echo "success";

			}else{
				echo "falure";
			}


?>

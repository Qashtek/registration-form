





<!DOCTYPE html>
<html>
<head>
	<title>Registration form</title>
	
	

	<link rel="stylesheet" type="text/CSS" href="fontawesome/css/all.css" />
	<style>
		*{
			box-sizing: border-box;
			margin: 0;
			padding: 0;
			font-family: 'segoe UI', sans-serif;
		}

		div.formwrap{
			width: 50%;
			height: 70rem;
			margin: auto;
			/*border: 2px solid dodgerblue;*/
			padding: 15px;
			
		}

		div.formwrap h1{
			text-align: center;
			padding: 5px;
			margin-bottom: 10px;
			border-bottom: 2px solid #444;
		}

		form#regform{
			width: 100%;
			height: 90%;
			/*border: 1px solid #666;*/
			padding: 25px 55px;
			background: #bbc;
			margin-top: 20px;
			
		}

		input[type="text"], input[type="tel"], input[type="email"] {
			width: 50%;
			padding: 5px;
			transition: width .3s ease;
			font-size: 0.8em;
		}

		input[type="text"]:hover, input[type="tel"]:hover, input[type="email"]:hover{
			width: 60%;
			border: 1px solid dodgerblue;
			box-shadow: 2px 3px 6px #444;
		}

		input[type="date"]{
			padding: 5px;
			width:auto ;
			font-size: 0.8em;
		}

		select{
			padding: 5px;
			width: auto;
			border: transparent;
			font-size: 0.8em;
		}

		select option{
			/*padding: 5px;*/
			/*font-size: 120%;*/
			
			font-size: 1em;
			
		}
		
	

		label{
			padding: 15px 0;
			color: #117;
			font-weight: 510;
		}

		input[placeholder]{
			padding: 5px 10px;
		}

		input[type="submit"]{
			padding: 10px 25px;
			background: dodgerblue;
			border: transparent;
			box-shadow: 2px 2px 3px #666;
			font-variant: small-caps;
			font-weight: 520;
		}

		input[type="submit"]:hover{
			border: 2px solid dodgerblue;
			background: transparent;
			color: #111;
			font-variant: small-caps;
			font-weight: 520;
		}

		input{
			margin: 2px 0px;
			border-radius: 2px;
			border: transparent;
		}
		.danger{
			color: red;
			font-size: 0.87em;
			font-style: italic;
			font-weight: 501;
			letter-spacing: 0.8px;
		}
		
		.phpOut{
			font-size: 1.3em;
			/*border: 1px solid red;*/
			padding: 5px 0;
			text-align: center;
		}
		
		.success{
			width: 100%;
			margin : auto;
			color: green;
			text-align: center;
			font-weight: 502;
			background: #ace;
		}
		
	</style>
</head>
<body>

<!-- form markup -->
	<div class="formwrap">

		<h1>Connak ICT registration form</h1>

<?php 
			
			function checkInput($data){
				
				$data = trim($data);
				$data = stripslashes($data);
				$data = htmlspecialchars($data);
				return $data;
				
			}
			
			//VARIABLES FOR INPUT FIELD DATA AND ERROR MESSAGES
			$fname = $lname = $pnum = $eMail = $reside = $lgorigin = $nationL = $dateOB = "";
			$fnameErr = $LnameErr = $numErr = $mailErr = $resAdErr = $lgErr = $natioErr = $dateErr = "";
			
			//REGEXP
			$strChecker = "/^[a-zA-Z ]*$/ "; //CHECK FOR STRINGS
			$numChecker = "/^[+0-9 ]*$/"; // CHECK FOR NUMBERS
			$resAdresCheker = "/^[a-zA-Z0-9,. -]*$/"; //CHECK RESIDENTIAL ADDRESS
			$lgChecker = "/^[a-zA-Z- ]*$/ "; //CHECK FOR LGA
			$natChecker = "/^[a-zA-Z- ]*$/ "; //CHECK FOR NATIONALITY
			
			
			
			if($_SERVER["REQUEST_METHOD"] == "POST"){
				
				$fname = checkInput($_POST['firstName']); //FIRST NAME
				$lname = checkInput($_POST['lastName']); // LAST NAME
				$pnum = checkInput($_POST['phoneNum']); //PHONE NUMBER
				$eMail = checkInput($_POST['mail']); //EMAIL ADDRESS
				$reside = checkInput($_POST['resAdrex']); //RESIDENTIAL ADDRESS
				$lgorigin = checkInput($_POST['lgaOrigin']); //LGA 
				$nationL = checkInput($_POST['nation']); //NATIONALITY
				$dateOB = checkInput($_POST['dob']); //DATE OF BIRTH
				 	
				
				// GENERAL VALIDATION 
				if (empty($fname) && empty($lname) && empty($pnum) && empty($eMail) && empty($reside) && empty($lgorigin) && empty($nationL) && empty($dateOB)  ){
					$fnameErr = "<span class='danger'> *First Name is required*</span>";
					$LnameErr = "<span class='danger'> *Last Name is required*</span>";
					$numErr = "<span class='danger'> *Phone Number is required* </span>";
					$mailErr = "<span class='danger'> *Email is required*</span>";
					$resAdErr = "<span class='danger'>*Residential address is required* </span>";
					$lgErr = "<span class='danger'> *Local government area is required*</span>";
					$natioErr = "<span class='danger'>*Nationality is required* </span>";
					$dateErr = "<span class='danger'> *Date of birth is required*</span>";
				}
				else{
					
					//FIRST NAME VALIDATION
					if(empty($fname)){
						$fnameErr = "<span class='danger'> *First Name is required*</span>";
					}
					elseif(!preg_match($strChecker, $fname)){
						$fnameErr = "<span class='danger'> *Only letters and white space is allowed*</span>";
					}
					elseif(strlen($fname) < 3 || strlen($fname) > 15){
						$fnameErr = "<span class='danger'> *First Name must be between 3 - 15 letters*</span>";
					}
					else{
						$fname;
					}
					
					//LAST NAME VALIDATION
					if(empty($lname)){
						$LnameErr = "<span class='danger'> *Last Name is required*</span>";
					}
					elseif(!preg_match($strChecker, $lname)){
						$LnameErr = "<span class='danger'> *Only letters and white space is allowed*</span>";
					}
					elseif(strlen($lname) < 3 || strlen($lname) > 15){
						$LnameErr = "<span class='danger'> *Last Name must be between 3 - 15 letters*</span>";
					}
					else{
						$lname;
					}
					
					//PHONE NUMBER VALIDATION
					if(empty($pnum)){
						$numErr = "<span class='danger'> *Phone Number is required* </span>";
					}
					elseif(!preg_match($numChecker,$pnum)){
						$numErr = "<span class='danger'> *Only numeric characters allowed* </span>";
					}
					elseif(strlen($pnum) < 11 || strlen($pnum) > 14){
						$numErr = "<span class='danger'> *Phone number must be between 11 - 14 characters* </span>";
					}
					else{
						$pnum;
					}
					
					//EMAIL ADDRESS VALIDATION
					if(empty($eMail)){
						$mailErr = "<span class='danger'> *Email is required*</span>";
					}
					elseif(!filter_var($eMail, FILTER_VALIDATE_EMAIL)){
						$mailErr = "<span class='danger'> *Invalid email address*</span>";
					}
					elseif( strlen($eMail) < 6 || strlen($eMail) > 35 ){
						$mailErr = "<span class='danger'> *Email address cannot be less than 6 characters or more than 35 characters*</span>";
					}
					else{
						$eMail;
					}
					
					//RESIDENTIAL ADDRESS VALIDATION
					if(empty($reside)){
						$resAdErr = "<span class='danger'>*Residential address is required* </span>";
					}
					elseif(!preg_match($resAdresCheker, $reside)){
						$resAdErr = "<span class='danger'>*Invalid characters detected* </span>";
					}
					elseif(strlen($reside) < 7 || strlen($reside) > 35){
						$resAdErr = "<span class='danger'>*Address must be minimum 7 characters and Maximum 35 characters! * </span>";
					}
					else{
						$reside;
					}
					
					//LOCAL GOVERNMENT VALIDATION
					if(empty($lgorigin)){
						$lgErr = "<span class='danger'> *Local government area is required*</span>";
					}
					elseif(!preg_match($lgChecker, $lgorigin )){
						$lgErr = "<span class='danger'> *Invalid characters detected, check input*</span>";
					}
					elseif(strlen($lgorigin ) < 3 || strlen($lgorigin ) > 30){
						$lgErr = "<span class='danger'> *This field must have minimum 3 characters and maximum 30 characters!*</span>";
					}
					else{
						$lgorigin;
					}
					
					//NATIONALITY VALIDATION
					if(empty($nationL)){
						$natioErr = "<span class='danger'>*Nationality is required* </span>";
					}
					elseif(!preg_match($natChecker, $nationL)){
						$natioErr = "<span class='danger'>*Invalid characters detected, check input* </span>";
					}
					elseif(strlen($nationL ) < 3 || strlen($nationL ) > 30){
						$natioErr = "<span class='danger'> *This field must have minimum 3 characters and maximum 30 characters!*</span>";
					}
					else{
						$nationL;
					}
					
					//DATE OF BIRTH VALIDATION
					if(empty($dateOB)){
						$dateErr = "<span class='danger'> *Date of birth is required*</span>";
					}
					else{
						$dateOB;
					}
					
					
					if (!empty($fname) && !empty($lname) && !empty($pnum) && !empty($eMail) && !empty($reside) && !empty($lgorigin) && !empty($nationL) && !empty($dateOB)  ){
						echo "<div class='success'>Form submitted succesfully</div>";
					}
				}
				
				
			}
			
				     
		
		?>
		
		
		<form name="formReg" action="<?php  htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST" id="regform" onsubmit="return valform()">
			
			<label>First Name: </label><br/>
			<input type="text" name="firstName" placeholder="enter first name here" id="firName" > 
			<span id="outFirstNIcon">
			<?php echo "$fnameErr"; ?>
			</span><br/>
			<span id="outFirstN"></span>

			<br/>

			<label>Last Name: </label><br/>
			<input type="text" name="lastName" placeholder="enter last name here" id="lasName">
			<span id="outLastNIcon">
			<?php echo "$LnameErr"; ?>
			</span><br/>
			<span id="outLastN"></span>

			<br/>

			<label>Phone Number: </label><br/>
			<input type="tel" name="phoneNum" placeholder="enter phone number here" id="phoneNumb">
			<span id="outPhoneIcon">
			<?php echo"$numErr"; ?>
			</span><br/>
			<span id="outPhone"></span>

			<br/>

			<label>Email address: </label><br/>
			<input type="email" name="mail" placeholder="enter your email address" id="emailAd" >
			<span id="outEmailIcon">
			<?php echo"$mailErr"; ?>
			</span><br/>
			<span id="outEmail"></span>

			<br/>

			<label>Gender: </label><br/>
			<select name="gender">
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			<span id="outGenderIcon"></span><br/>
			<br/>

			<label>Residential address: </label><br/>
			<input type="text" name="resAdrex" placeholder="Enter your residential address" id="resideAd" >
			<span id="outResidentIcon">
			<?php echo"$resAdErr"; ?>
			</span><br/>
			<span id="outResident"></span>

			<br/>
			<label> State of origin: </label><br/>
			<select name="states">
				<option value="Abia">Abia State</option>
				<option value="Adamawa">Adamawa State</option>
				<option value=""> State</option>
			</select>
			<br/>

			<br/>
			<label> Local government of origin: </label><br/>
			<input type="text" name="lgaOrigin" placeholder="Enter your L.G.A of origin" id="lga" >
			<span id="outLGAIcon">
			<?php echo"$lgErr"; ?>
			</span><br/>
			<span id="outLGA"></span>

			<br/>
			<label>Nationality: </label><br/>
			<input type="text" name="nation" placeholder="Enter your nationality" id="nationale">
			<span id="outNationIcon">
			<?php echo"$natioErr"; ?>
			</span><br/>
			<span id="outNation"></span>

			<br/>
			<label>Date of birth: </label><br/>
			<input type="date" name="dob"  id="dateOFbirth" >
			<span id="outDateIcon">
			<?php echo"$dateErr"; ?>
			</span><br/>
			<span id="outDate"></span>

			<br/>
			<label>ICT program: </label><br/>
			<select>
				<option>Web Development</option>
				<option>Graphic Design</option>
				<option>Hardware Development</option>
			</select>
			<br/><br/>

			<label> Year of program:</label><br/>
			<select>
				<option>2019</option>
				<option>2020</option>
				<option>2021</option>
				<option>2022</option>
			</select>
			<br/><br/>

			<input type="submit" name="submit" value="register">


		</form>
	</div>
	


<!-- EXTERNAL JAVASCRIPT FILE-->
	<script src="validate.js">
		
	</script>

</body>
</html>
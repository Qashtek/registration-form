
// FORM VALIDATION FUNCTION
function valform(){

	var first_Name = document.forms['formReg']['firstName'].value;
	var last_Name = document.forms['formReg']['lastName'].value;
	var phone_Num = document.forms['formReg']['phoneNum'].value;
	var email = document.forms['formReg']['mail'].value;
	var resident_Add = document.forms['formReg']['resAdrex'].value;
	//var stateOriginal = document.forms['formReg']['stateOfOrigin'].value;
	var lgaOrigin = document.forms['formReg']['lgaOrigin'].value;
	var nationaly = document.forms['formReg']['nation'].value;
	var dateOB = document.forms['formReg']['dob'].value;
	var text;

// REGULAR EXPRESSIONS
	var StringCheck = /^[a-zA-Z]+$/;
	var NumCheck = /^[+]+[0-9]+[0-9]+$/;
	var emailCheck = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
	var resAdrex_check = /^[a-zA-Z0-9+/., -]+$/;
	var lgaCheck = /^[a-zA-Z+a-zA-Z- ]+$/;
	var nationCheck = /^[a-zA-Z+a-zA-Z- ]+$/;




// FIRST NAME VALIDATION

	if (first_Name == ""){
		text = "<span class='danger'>This field cannot be empty! </span>";
		document.getElementById('outFirstN').innerHTML = text;
		document.getElementById('outFirstNIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('firName').style.border= '1px solid red';
		document.getElementById('outFirstNIcon').style.color="red";
		return false;
	}
	else if(!StringCheck.test(first_Name)){
		text = "<span class='danger'>only alphabetic characters are allowed! </span>";
		document.getElementById('outFirstN').innerHTML = text;
		document.getElementById('outFirstNIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('firName').style.border= '1px solid red';
		document.getElementById('outFirstNIcon').style.color="red";
		return false;
	}
	else if(first_Name.length < 3 || first_Name.length > 15){
		text = "<span class='danger'>field must be between 3 - 15 characters! </span>";
		document.getElementById('outFirstN').innerHTML = text;
		document.getElementById('outFirstNIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('firName').style.border= '1px solid red';
		document.getElementById('outFirstNIcon').style.color="red";
		return false;
	}
	else if( StringCheck.test(first_Name)){
		text = "";
		document.getElementById('outFirstN').innerHTML = text;
		document.getElementById('outFirstNIcon').innerHTML = '<i class="fas fa-circle-check"></i>';
		document.getElementById('firName').style.border= '1px solid green';
		document.getElementById('outFirstNIcon').style.color="green";
		// return false;
	}

// LAST NAME VALIDATION
	if(last_Name == ""){
		text = "<span class='danger'>This field cannot be empty! </span>";
		document.getElementById('outLastN').innerHTML = text;
		document.getElementById('outLastNIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('lasName').style.border= '1px solid red';
		document.getElementById('outLastNIcon').style.color="red";
		return false;
	}
	else if(!StringCheck.test(last_Name)){
		text = "<span class='danger'>only alphabetic characters are allowed! </span>";
		document.getElementById('outLastN').innerHTML = text;
		document.getElementById('outLastNIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('lasName').style.border= '1px solid red';
		document.getElementById('outLastNIcon').style.color="red";
		return false;
	}
	else if(last_Name.length < 3 || last_Name.length > 15){
		text = "<span class='danger'>field must be between 3 - 15 characters! </span>";
		document.getElementById('outLastN').innerHTML = text;
		document.getElementById('outLastNIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('lasName').style.border= '1px solid red';
		document.getElementById('outLastNIcon').style.color="red";
		return false;
	}
	else if( typeof last_Name == "string"){
		text = "";
		document.getElementById('outLastN').innerHTML = text;
		document.getElementById('outLastNIcon').innerHTML = '<i class="fas fa-circle-check"></i>';
		document.getElementById('lasName').style.border= '1px solid green';
		document.getElementById('outLastNIcon').style.color="green";
		// return false;
	}

// PHONE NUMBER VALIDATION
	if(phone_Num == ""){
		text = "<span class='danger'>This field cannot be empty! </span>";
		document.getElementById('outPhoneIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('outPhone').innerHTML = text;
		document.getElementById('phoneNumb').style.border = "1px solid red";
		document.getElementById('outPhoneIcon').style.color = "red";
		return false;
	}
	else if(isNaN(phone_Num)){
		text = "<span class='danger'>only numeric characters are allowed! </span>";
		document.getElementById('outPhoneIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('outPhone').innerHTML = text;
		document.getElementById('phoneNumb').style.border = "1px solid red";
		document.getElementById('outPhoneIcon').style.color = "red";
		return false;
	}
	else if(phone_Num.length < 11 || phone_Num.length > 14){
		text = "<span class='danger'>invalid phone number </span>";
		document.getElementById('outPhoneIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('outPhone').innerHTML = text;
		document.getElementById('phoneNumb').style.border = "1px solid red";
		document.getElementById('outPhoneIcon').style.color = "red";
		return false;
	}
	else if(NumCheck.test(phone_Num)){
		text = "";
		document.getElementById('outPhoneIcon').innerHTML = '<i class="fas fa-circle-check"></i>';
		document.getElementById('outPhone').innerHTML = text;
		document.getElementById('phoneNumb').style.border = "1px solid green";
		document.getElementById('outPhoneIcon').style.color = "green";
		// return false;
	}

// EMAIL VALIDATION 
	if(email === ""){
		text ="<span class ='danger'>Email address cannot be empty!</span>";
		document.getElementById('outEmail').innerHTML = text;
		document.getElementById('outEmailIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('emailAd').style.border = "1px solid red";
		document.getElementById('outEmailIcon').style.color = "red";
		return false;
	}
	else if(!emailCheck.test(email)){
		text ="<span class ='danger'>Invalid email address !</span>";
		document.getElementById('outEmail').innerHTML = text;
		document.getElementById('outEmailIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('emailAd').style.border = "1px solid red";
		document.getElementById('outEmailIcon').style.color = "red";
		return false;
	}
	else if(email.length < 8 || email.length > 35){
		text ="<span class ='danger'>Email address must be between 8 - 30 characters!</span>";
		document.getElementById('outEmail').innerHTML = text;
		document.getElementById('outEmailIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('emailAd').style.border = "1px solid red";
		document.getElementById('outEmailIcon').style.color = "red";
		return false;
	}
	else if(emailCheck.test(email)){
		text ="";
		document.getElementById('outEmail').innerHTML = text;
		document.getElementById('outEmailIcon').innerHTML = '<i class="fas fa-circle-check"></i>';
		document.getElementById('emailAd').style.border = "1px solid green";
		document.getElementById('outEmailIcon').style.color = "green";
		//return false;
	}

//RESIDENTIAL ADDRESS VALIDATION
	
	if(resident_Add == ""){
		text="<span class='danger'>This field cannot be empty! </span>";
		document.getElementById('outResident').innerHTML = text;
		document.getElementById('outResidentIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('resideAd').style.border= '1px solid red';
		document.getElementById('outResidentIcon').style.color="red";
		return false;	
	}
	else if (!resAdrex_check.test(resident_Add)){
		text ="<span class='danger'>Sorry, address contains invalid characters! </span>";
		document.getElementById('outResident').innerHTML = text;
		document.getElementById('outResidentIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('resideAd').style.border= '1px solid red';
		document.getElementById('outResidentIcon').style.color="red";
		return false;	
	}
	else if(resident_Add.length < 7 || resident_Add.length  > 35){
		text ="<span class='danger'>Address must be minimum 7 characters and Maximum 35 characters! </span>";
		document.getElementById('outResident').innerHTML = text;
		document.getElementById('outResidentIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('resideAd').style.border= '1px solid red';
		document.getElementById('outResidentIcon').style.color="red";
		return false;	
		
	}
	else if (resAdrex_check.test(resident_Add)){
		text ="";
		document.getElementById('outResident').innerHTML = text;
		document.getElementById('outResidentIcon').innerHTML = '<i class="fas fa-circle-check"></i>';
		document.getElementById('resideAd').style.border= '1px solid green';
		document.getElementById('outResidentIcon').style.color="green";
		//return false;	
	}
	
//LOCAL GOVT OF ORIGIN VALIDATION
	if(lgaOrigin == ""){
		text="<span class='danger'>This field cannot be empty! </span>";
		document.getElementById('outLGA').innerHTML = text;
		document.getElementById('outLGAIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('lga').style.border= '1px solid red';
		document.getElementById('outLGAIcon').style.color="red";
		return false;
	}
	else if(!isNaN(lgaOrigin)){
		text="<span class='danger'>This field must only contain alphabetic characters! </span>";
		document.getElementById('outLGA').innerHTML = text;
		document.getElementById('outLGAIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('lga').style.border= '1px solid red';
		document.getElementById('outLGAIcon').style.color="red";
		return false;
	}
	else if(!lgaCheck.test(lgaOrigin)){
		text="<span class='danger'>Invalid characters detected! </span>";
		document.getElementById('outLGA').innerHTML = text;
		document.getElementById('outLGAIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('lga').style.border= '1px solid red';
		document.getElementById('outLGAIcon').style.color="red";
		return false;
	}
	else if(lgaOrigin.length < 3 || lgaOrigin.length > 30){
		text="<span class='danger'>This field must have minimum 3 characters and maximum 30 characters! </span>";
		document.getElementById('outLGA').innerHTML = text;
		document.getElementById('outLGAIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('lga').style.border= '1px solid red';
		document.getElementById('outLGAIcon').style.color="red";
		return false;
	}
	else if(lgaCheck.test(lgaOrigin)){
		text="";
		document.getElementById('outLGA').innerHTML = text;
		document.getElementById('outLGAIcon').innerHTML = '<i class="fas fa-circle-check"></i>';
		document.getElementById('lga').style.border= '1px solid green';
		document.getElementById('outLGAIcon').style.color="green";
		//return false;
	}
	
//NATIONALITY VALIDATION
	if(nationaly == ""){
		text = "<span class='danger'>This field cannot be empty! </span>";
		document.getElementById('outNation').innerHTML = text;
		document.getElementById('outNationIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('nationale').style.border= '1px solid red';
		document.getElementById('outNationIcon').style.color="red";
		return false;
	}
	else if(!isNaN(nationaly)){
		text="<span class='danger'>This field must only contain alphabetic characters! </span>";
		document.getElementById('outNation').innerHTML = text;
		document.getElementById('outNationIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('nationale').style.border= '1px solid red';
		document.getElementById('outNationIcon').style.color="red";
		return false;
	}
	else if(!nationCheck.test(nationaly)){
		text = "<span class='danger'>This field cannot contain invalid characters </span>";
		document.getElementById('outNation').innerHTML = text;
		document.getElementById('outNationIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('nationale').style.border= '1px solid red';
		document.getElementById('outNationIcon').style.color="red";
		return false;
	}
	else if(nationaly.length < 3 || nationaly.length > 30){
		text="<span class='danger'>This field must have minimum 3 characters and maximum 30 characters! </span>";
		document.getElementById('outNation').innerHTML = text;
		document.getElementById('outNationIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('nationale').style.border= '1px solid red';
		document.getElementById('outNationIcon').style.color="red";
		return false;
	}
	else if(nationCheck.test(nationaly)){
		text = "";
		document.getElementById('outNation').innerHTML = text;
		document.getElementById('outNationIcon').innerHTML = '<i class="fas fa-circle-check"></i>';
		document.getElementById('nationale').style.border= '1px solid green';
		document.getElementById('outNationIcon').style.color="green";
		//return false;
	}
	
	//DATE  OF BIRTH VALIDATION
	if(dateOB == ""){
		text = "<span class='danger'>This field cannot be empty! </span>";
		document.getElementById('outDate').innerHTML = text;
		document.getElementById('outDateIcon').innerHTML = '<i class="fas fa-circle-exclamation"></i>';
		document.getElementById('dateOFbirth').style.border= '1px solid red';
		document.getElementById('outDateIcon').style.color="red";
		return false;
	}
}







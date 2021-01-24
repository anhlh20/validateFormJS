function validate() {
	var uname = document.getElementById("username");
	var fullname = document.getElementById("fullname");
	var lastname = document.getElementById("lastname");
	var firstname = document.getElementById("firstname");
	var phone = document.getElementById("phone");
	var email = document.getElementById("email");
	var pwd = document.getElementById("password");
	var pwd_repeat = document.getElementById("password-repeat");

	//check username
	if (uname != null) {
		if (uname.value == "" || uname.value.length < 6) {
			if (uname.value == "") {
				alert("Vui lòng nhập tên đăng nhập.");
			}
			else {
				alert("Tên đăng nhập phải có ít nhất 6 ký tự");
			}
			uname.focus();
			return false;
		}
	}

	//check fullname
	if (fullname != null) {
		if (fullname.value == "") {
			alert("Vui lòng nhập họ tên.")
			fullname.focus();
			return false;
		}
	}

	//check lastname
	if (lastname != null) {
		if (lastname == null) {
			alert("Vui lòng nhập Họ!");
			lastname.focus();
			return false;
		}
	}

	//check firstname
	if (firstname != null) {
		if (firstname.value == "") {
			alert("Vui lòng nhập tên!");
			firstname.focus();
			return false;
		}

	}

	//check password
	if (pwd != null){
		if (pwd.value == "") {
			alert("Vui lòng nhập mật khẩu!");
			pwd.focus();
			return false;
		}
	}
	
	//check password-repeat
	if (pwd_repeat != null) {
		if (pwd_repeat.value == "" || pwd_repeat.value != pwd.value) {
			if (pwd_repeat.value == "") {
				alert("Vui lòng xác minh mật khẩu!");
			}
			else {
				alert("Mật khẩu không khớp. Hãy thử lại.");
			}
			pwd_repeat.focus();
			return false;
		}
	}
	
	//check phone
	if (phone != null) {
		var checkPhone = isNaN(phone.value);
		if (phone.value == "" || checkPhone == true) {
			if (phone.value == "") {
				alert("Vui lòng nhập số điện thoại!");
			}
			else {
				alert("Điện thoại phải để ở định dạng số");
			}
			phone.focus();
			return false;
		}
	}

	//check email
	if (email != null) {
		var emailID = email.value;
		atpos = emailID.indexOf("@");
		dotpos = emailID.lastIndexOf(".");
		if (emailID == "") {
			alert ("Vui lòng nhập email.");
			email.focus();
			return false;
		}
		if (atpos < 1 || (dotpos - atpos < 2) || (dotpos + 2 > emailID.length)) {
            alert("Email không chính xác.")
            email.focus() ;
            return false;
         }
	}
	
	alert("All are correct!");

	return true;
}
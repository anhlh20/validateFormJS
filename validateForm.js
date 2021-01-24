function validate() {
	var uname = document.getElementById("username");
	var fullname = document.getElementById("fullname");
	var lastname = document.getElementById("lastname");
	var firstname = document.getElementById("firstname");
	var phone = document.getElementById("phone");
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
			document.getElementById("username").focus();
			return false;
		}
	}

	//check fullname
	if (fullname != null) {
		if (fullname.value == "") {
			alert("Vui lòng nhập họ tên.")
			document.getElementById("fullname").focus();
			return false;
		}
	}

	//check lastname
	if (lastname != null) {
		if (lastname == null) {
			alert("Vui lòng nhập Họ!");
			document.getElementById("lastname").focus();
			return false;
		}
	}

	//check firstname
	if (firstname != null) {
		if (firstname.value == "") {
			alert("Vui lòng nhập tên!");
			document.getElementById("firstname").focus();
			return false;
		}

	}

	//check password
	if (pwd != null){
		if (pwd.value == "") {
			alert("Vui lòng nhập mật khẩu!");
			document.getElementById("password").focus();
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
			document.getElementById("password-repeat").focus();
			return false;
		}
	}
	
	//check phone
	if (phone.value == "") {
		alert("Vui lòng nhập số điện thoại!");
		document.getElementById("phone").focus();
		return false;
	}
	else {
		var checkPhone = isNaN(phone.value);
		if (checkPhone == true) {
			alert("Điện thoại phải để ở định dạng số");
			document.getElementById("phone").focus();
			return false;
		}
	}



	alert("All are correct!");

	return true;
}
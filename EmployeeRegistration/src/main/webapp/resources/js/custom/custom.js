$(document).ready(function() {//-----------------------------------document load time
	loadCountry();
	loadData();
});

function resetForm(){// ---------------------------------------------reset form
	$("#id").val("");
	$("#fname").val("");
	$("#mname").val("");
	$("#lname").val("");
	$("#bdate").val("");
	$("#email").val("");
	$("#contact").val("");
	$("input[name='gender']:checked").prop('checked',false);
	$("#country").val("");
	$("#state").val("");
	$("#city").val("");
	$("#pincode").val("");
	$("#address").val("");
	$("input[type='checkbox']").prop("checked",false);
	$("#pwd").val("");
	$("#cpwd").val("");
}
$(document).on("click","#update",function (){//-----------------------load from data by id
	var id=$(this).val();
	$.ajax({
		  url: "/EmployeeRegistration/employeeLoad",
		  method:"POST",
		  data:{id:id},
		  dataType:"JSON",
		  success: function(result){
			 $("#id").val(result["1"]);
			 $("#fname").val(result["2"]);
			 $("#mname").val(result["3"]);
			 $("#lname").val(result["4"]);
			 $("#bdate").val(result["5"]);
			 $("#email").val(result["6"]);
			 $("#contact").val(result["7"]);
			 $("#"+result["8"]+"").prop("checked", true)
			 $("#country").val(result["11"]);
			 $("#state").val(result["12"]);
			 $("#city").val(result["13"]);
			 $("#pincode").val(result["14"]);
			 $("#address").val(result["10"]);
			 $("#pwd").val(result["9"]);
			 $("#cpwd").val(result["9"]); 
			 
			 for(i=0;i<$("input[type='checkbox']").length;i++){
				 var data=$("input[type='checkbox']")[i].value;
				 if(result["15"].search(data)>0){
					 $("input[type='checkbox']")[i].checked=true;
				 }
			 }
//			 result["15"].
//			 str.search("W3Schools")
//			 $("input[type='checkbox']")[1].checked=true;
//			 $("input[type='checkbox']")[1].value;
			 
			 $('#open').click();
		  }
	  });
});
$(document).on("click","#delete",function (){//----------------------delete employee
	var data=$(this).val();
	$.ajax({
		  url: "/EmployeeRegistration/deleteEmployee",
		  method:"POST",
		  dataType:"JSON",
		  data:{data:data },
		  success: function(result){
//			  alert(result);
		  },
		  error: function (jqXHR, exception) {
//			  alert("employee delete fail");
		}
	  });
		setTimeout(function(){ loadData(); }, 1500);
});
function validation(){//---------------------------------------------validation Form
	var id=$("#id").val();
	var fname=$("#fname").val();
	var mname=$("#mname").val();
	var lname=$("#lname").val();
	var bdate=$("#bdate").val();
	var email=$("#email").val();
	var contact=$("#contact").val();
	var gender=$("input[name='gender']:checked").val();
	var country=$("#country").val();
	var state=$("#state").val();
	var city=$("#city").val();
	var pincode=$("#pincode").val();
	var address=$("#address").val();
	var hobbies=$("input[type='checkbox']:checked");
	var arrhobbies=new Array();
	for(i=0;i<hobbies.length;i++){
		arrhobbies[i]=hobbies[i].value;
	}
	var pwd=$("#pwd").val();
	var cpwd=$("#cpwd").val();
	
	
//----------------------------------------------------------------------------re	
	var name = /^[a-zA-Z]+$/g;
	var email1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var date =/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
	var number=/^[0-9]*$/;
	
	$("#fname1,#mname1,#lname1,#bdate1,#email1,#contact1,#gender1,#city1,#pincode1,#pwd1,#cpwd1,#address1").empty();
	if(fname == ""){//--------------------------------------------------------fname
		$("#fname1").text("enter the first name");
		$('#fname1').attr("style","color:red;");
	}else if(!name.test(fname)){
		$("#fname1").text("enter first name in charecter only");
		$('#fname1').attr("style","color:red;");
	}else if(fname.length<3){
		$("#fname1").text("enter first name min legth 3");
		$('#fname1').attr("style","color:red;");
	}else if(mname == ""){//--------------------------------------------------mname
		$("#mname1").text("enter the midel name");
		$('#mname1').attr("style","color:red;");
	}else if(name.test(mname)){
		$("#mname1").text("enter midel name in charecter only");
		$('#mname1').attr("style","color:red;");
	}else if(mname.length<3){
		$("#mname1").text("enter midel name min legth 3");
		$('#mname1').attr("style","color:red;");
	}else if(lname == ""){//--------------------------------------------------lname
		$("#lname1").text("enter the last name");
		$('#lname1').attr("style","color:red;");
	}else if(!name.test(lname)){
		$("#lname1").text("enter last name in charecter only");
		$('#lname1').attr("style","color:red;");
	}else if(lname.length<3){
		$("#lname1").text("enter last name min legth 3");
		$('#lname1').attr("style","color:red;");
	}else if(bdate == ""){//---------------------------------------------------bdate
		$("#bdate1").text("enter birth date");
		$('#bdate1').attr("style","color:red;");
	}else if(!date.test(bdate)){
		$("#bdate1").text("enter the valid formate of birth date");
		$('#bdate1').attr("style","color:red;");
	}else if(!validateDOB(bdate)){
		$("#bdate1").text("enter the valid birth date");
		$('#bdate1').attr("style","color:red;");
	}else if(email == ""){//---------------------------------------------------email
		$("#email1").text("enter the email");
		$('#email1').attr("style","color:red;");
	}else if(!email1.test(email)){
		$("#email1").text("enter valid emial");
		$('#email1').attr("style","color:red;");
	}else if(contact == ""){//-------------------------------------------------contact
		$("#contact1").text("enter the contact");
		$('#contact1').attr("style","color:red;");
	}else if(!number.test(contact)){
		$("#contact1").text("enter contact in only digit");
		$('#contact1').attr("style","color:red;");
	}else if(contact.length < 10 || contact.length > 16){
		$("#contact1").text("enter contact min length 10 and max length 16");
		$('#contact1').attr("style","color:red;");
	}else if(gender == undefined){//---------------------------------------------gender
		$("#gender1").text("select the gender");
		$('#gender1').attr("style","color:red;");
	}else if(city == ""){//------------------------------------------------------city
		$("#city1").text("enter the city");
		$('#city1').attr("style","color:red;");
	}else if(name.test(city)){
		$("#city1").text("enter city in charecter only");
		$('#city1').attr("style","color:red;");
	}else if(pincode == ""){//----------------------------------------------------pincode
		$("#pincode1").text("enter the pincode");
		$('#pincode1').attr("style","color:red;");
	}else if(!number.test(pincode)){
		$("#pincode1").text("enter pincode in digit only");
		$('#pincode1').attr("style","color:red;");
	}else if(pincode.length <6 || pincode.length > 6){
		$("#pincode1").text("enter pincod length 6");
		$('#pincode1').attr("style","color:red;");
	}else if(address==""){
		$("#address1").text("enter the address");
		$('#address1').attr("style","color:red;");
	}else if(pwd==""){//----------------------------------------------------------pwd
		$("#pwd1").text("enter the password");
		$('#pwd1').attr("style","color:red;");
	}else if(pwd.length<6 || pwd.length>16){
		$("#pwd1").text("enter password min length 6 and max length 16");
		$('#pwd1').attr("style","color:red;");
	}else if(pwd!=cpwd){//---------------------------------------------------------cpwd
		$("#cpwd1").text("not match the confirm password");
		$('#cpwd1').attr("style","color:red;");
	}else{
		if(id==""){
			var myObject = new Object();//-----------------------------------------insert employee
			myObject.fname=fname;
			myObject.mname=mname;
			myObject.lname=lname;
			myObject.birthDate=bdate;
			myObject.email=email;
			myObject.contact=contact;
			myObject.gender=gender;
			myObject.country=country;
			myObject.state=state;
			myObject.city=city;
			myObject.pincode=pincode;
			myObject.address=address;
			myObject.hobbies=arrhobbies;
			myObject.password=pwd;
			var myString = JSON.stringify(myObject);
			$.ajax({
				  url: "/EmployeeRegistration/employeeRegistration",
				  method:"POST",
				  dataType:"JSON",
				  data:{data:myString },
				  success: function(result){
//					  alert(result);
				  },
				  error: function (jqXHR, exception) {
//					    alert(jqXHR.status);
//					    alert("employee insert fail");
					    
				 }
			  });
			setTimeout(function(){ loadData();$('#close').click(); }, 1500);
		}else{
			var myObject = new Object();//----------------------------------update employee
			myObject.id=id;
			myObject.fname=fname;
			myObject.mname=mname;
			myObject.lname=lname;
			myObject.birthDate=bdate;
			myObject.email=email;
			myObject.contact=contact;
			myObject.gender=gender;
			myObject.country=country;
			myObject.state=state;
			myObject.city=city;
			myObject.pincode=pincode;
			myObject.address=address;
			myObject.hobbies=arrhobbies;
			myObject.password=pwd;
			var myString = JSON.stringify(myObject);
			$.ajax({
				  url: "/EmployeeRegistration/updateEmployee",
				  method:"POST",
				  dataType:"JSON",
				  data:{data:myString },
				  success: function(result){
//					 alert(result);
				  },
				  error: function (jqXHR, exception) {
//					    alert("employee update fail");
				}
			  });
			setTimeout(function(){ loadData();$('#close').click(); }, 1500);
		}
	}
}
//---------------------------------------------------------------------------------------------
function loadData(){//--------------------------------------------------table data load
	$("#tbody").html("");
	$.ajax({
		  url: "/EmployeeRegistration/loadData",
		  method:"POST",
		  dataType:"JSON",
		  success: function(result){
			 for(i=0;i<result.length;i++){
				 $("#tbody").append("<tr>");
				 $("#tbody").append("<td>"+result[i]["1"]+"</td>");
				 $("#tbody").append("<td>"+result[i]["4"]+"</td>");
				 $("#tbody").append("<td>"+result[i]["5"]+"</td>");
				 $("#tbody").append("<td>"+result[i]["6"]+"</td>");
				 $("#tbody").append("<td>"+result[i]["7"]+"</td>");
				 $("#tbody").append("<td>"+result[i]["10"]+"</td>");
				 $("#tbody").append("<td>"+result[i]["11"]+"</td>");
				 $("#tbody").append("<td>"+result[i]["12"]+"</td>");
				 $("#tbody").append("<td>"+result[i]["14"]+"</td>");
				 $("#tbody").append("<td><button class='btn btn-info' id='update' value='"+result[i]["17"]+"'>Update</button><button class='btn btn-info' id='delete' value='"+result[i]["17"]+"'>Delete</button></td>");
				 $("#tbody").append("<tr>");
			 }
		  }
	  });
}
function loadCountry(){//------------------------------------------Country load
	  $.ajax({
		  url: "/EmployeeRegistration/loadCountry",
		  success: function(result){
			  var data=JSON.parse(result);
			  for(i=0;i<data.length;i++){
				  $("#country").append("<option value='"+data[i].name+"'>"+data[i].name+"</option>");  
			  }
			  loadState();
		  }
	  });
}
function loadState(){//--------------------------------------------State load
	  var data=$("#country").val();
	  $("#state").html("");
	  $.ajax({
		  url: "/EmployeeRegistration/loadState",
		  method:"POST",
		  data:{data:data},
		  success: function(result){
			  var data=JSON.parse(result);
			  for(i=0;i<data.length;i++){
				  $("#state").append("<option value='"+data[i].name+"'>"+data[i].name+"</option>");  
			  }
		  }
	  });
}
function validateDOB(date)//----------------------------------------date validation
{
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	var arr = date.split("-");
	if(yyyy>arr[0]){
		return true;
	}else if(mm>arr[1]){
		return true;
	}else if(dd>arr[2]){
		return true;
	}
	return false;
}
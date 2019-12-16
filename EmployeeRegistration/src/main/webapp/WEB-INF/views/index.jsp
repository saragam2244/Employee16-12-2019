<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>

<!DOCTYPE html>
<html>

<head>
    <title>
        StudentRegistesionFormcom.mysql.cj.jdbc.Driver
    </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/bootstrap/bootstrap.min.css" />">
    <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/bootstrap/bootstrap-theme.min.css" />">
    <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/custome/insertform.css" />">

</head>

<body>
    <div class="container">
        <!-- Trigger the modal with a button -->
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" id="open">Employee Registration</button>
        <!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-lg">
                <!-- Modal content-->
                <div class="modal-content">

                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" onclick="resetForm();">&times;</button>
                        <h2 class="modal-title">Employee Registration</h2>
                    </div>
                    <div class="modal-body">


                        <div class="container">
                            <form action="#">
								<div class="form-group" style="display: none;">
                                    <label for="id">id</label>
                                    <input type="text" class="form-control" id="id" placeholder="Enter First Name" name="id">
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                	<label for="firstName">FIRST NAME:</label><label id="fname1"></label>
                                	</div>
                                    <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname">
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                		<label for="midelName">MIDEL NAME:</label><label id="mname1"></label>
                                	</div>
                                    <input type="text" class="form-control" id="mname" placeholder="Enter Midel Name" name="mname">
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                		<label for="lastName">LAST NAME:</label><label id="lname1"></label>
                                	</div>
                                    <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname">
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
 		                               	<label for="birthDate">DATE OF BIRTH:</label><label id="bdate1"></label>
                                	</div>
                                    <input data-format="yyyy-MM-dd" type="date" class="form-control" placeholder="Enter Birth Date" name="bdate" id="bdate">

                                </div>
                                <div class="form-group">
        							<div class="form-inline">
                                		<label for="email">EMAIL:</label><label id="email1"></label>
                                	</div>
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                		<label for="contact">MOBILE NUMBER:</label><label id="contact1"></label>
                                	</div>
                                    <input type="email" class="form-control" id="contact" placeholder="Enter Mobile Number" name="contact">
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                		<label for="gender">GENDER:</label><label id="gender1"></label>
                                	</div>
                                    <div class="form-inline">
                                        <label class="radio-inline"><input type="radio" name="gender" value="male" id="male">male</label>
                                        <label class="radio-inline"><input type="radio" name="gender" value="female" id="female">female</label>
                                        <label class="radio-inline"><input type="radio" name="gender" value="other" id="other">other</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                		<label for="country">COUNTRY:</label><label id="country1" ></label>
                                	</div>
                                    <select class="form-control" name="country" id="country" onchange="loadState();"></select>
                                </div>
                                <div class="form-group">
	                                <div class="form-inline">
	                                	<label for="state">STATE:</label><label id="state1"></label>
                                	</div>
                                    <select class="form-control" id="state" name="state"></select>
                                </div>
                                <div class="form-group">
	                                <div class="form-inline">
	                                	<label for="ciry">CITY:</label><label id="city1"></label>
                                	</div>
                                    <input type="text" class="form-control" id="city" placeholder="Enter City" name="city">
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                               			<label for="pincode">PIN CODE:</label><label id="pincode1"></label>
                                	</div>
                                    <input type="text" class="form-control" id="pincode" placeholder="Enter Pincode" name="pincode">
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                		<label for="address">ADDRESS:</label><label id="address1"></label>
                                	</div>
                                    <textarea class="form-control" rows="5" id="address" name="address"placeholder="Enter Your Address"></textarea>
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                		<label for="hobbies">HOBBIES:</label><label id="hobbies"></label>
                                	</div>
                                    <div class="form-inline">
                                        <div class="checkbox">
                                            <label><input type="checkbox" value="Reading" id="Reading"  name="hobbies1">Reading</label>
                                        </div>
                                        <div class="checkbox">
                                            <label><input type="checkbox" value="Gaming" id="Gaming" name="hobbies2">Gaming</label>
                                        </div>
                                        <div class="checkbox">
                                            <label><input type="checkbox" value="Photography" id="Photography" name="hobbies3">Photography</label>
                                        </div>
                                        <div class="checkbox">
                                            <label><input type="checkbox" value="Traveling" id="Traveling" name="hobbies4">Traveling</label>
                                        </div>
                                        <div class="checkbox">
                                            <label><input type="checkbox" value="Cooking" id="Cooking" name="hobbies5">Cooking</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                		<label for="pwd">Password:</label><label id="pwd1"></label>
                                	</div>
                                    <input type="password" class="form-control" id="pwd" placeholder="Enter Password" name="pwd">
                                </div>
                                <div class="form-group">
                                	<div class="form-inline">
                                		<label for="pwd">confirm Password:</label><label id="cpwd1"></label>
                                	</div>
                                    <input type="password" class="form-control" id="cpwd" placeholder="Enter Confirm Password" name="cpwd">
                                </div>
<!--                                 <div class="checkbox"> -->
<!--                                     <label><input type="checkbox" name="remember"> Remember me</label> -->
<!--                                 </div> -->
                            </form>
                        </div>

                    </div>
                    <div class="modal-footer">
                    	<button  type="button" class="btn btn-default" data-dismiss="modal" onclick="resetForm();" id="close">Close</button>
                     	<button  type="button" class="btn btn-default" onclick="validation();" id="save">SAVE</button>
                    </div>
                </div>

            </div>
        </div>

    </div>

	<table class="table table-responsive">
		<thead>
			<tr>
				<th>Name</th>
				<th>Birth Date </th>
				<th>Email</th>
				<th>Contact</th>
				<th>Gender</th>
				<th>Country</th>
				<th>State</th>
				<th>City</th>
				<th>Hobbies</th>
				<th>Action</th>
			</tr>
		</thead >
		<tbody id="tbody">
		</tbody>
	</table>


</body>
<script src="<c:url value="/resources/js/jquery-3.4.1.min.js" />"></script>
<script src="<c:url value="/resources/js/bootstrap/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/js/custom/custom.js" />"></script>

</html>
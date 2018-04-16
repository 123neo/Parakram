
$("#myBtn").click(function(){
        $("#myModal").modal();

        
    });
$('#submit').click(function(){

            var team_member_1 = $('#team_member_1').val().trim();
            var team_member_2 = $('#team_member_2').val().trim();
            var team_member_3 = $('#team_member_3').val().trim();
            var team_member_4 = $('#team_member_4').val().trim();
            var team_member_5 = $('#team_member_5').val().trim(); 
            var email = $('#email').val().trim();
            var contact = $('#contact').val().trim();
            var college = $('#college').val().trim();
            var event = $('#event').val().trim();

            var form_data = new FormData();
            form_data.append('team_member_1', team_member_1);
            form_data.append('team_member_2', team_member_2);
            form_data.append('team_member_3', team_member_3);
            form_data.append('team_member_4', team_member_4);
            form_data.append('team_member_5', team_member_5);
            form_data.append('event', event);
            form_data.append('email', email);
            form_data.append('contact', contact);
            form_data.append('college', college);
            form_data.append('operation', 'data')

            $.ajax({
                        type: 'post',
                        url: "./ajax/reg.php",
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: form_data,
                        success: function (data) {
                            var r = confirm("Click OK to proceed for payment!");
                            if (r == true) {
                                if (data == 'arc') {
                    
                                        window.location = "https://imjo.in/UxNyrk";
                                    }
                                else if(data == 'aerotrix'){
                                        window.location = "https://imjo.in/TpwUFd";
                                }
                                else if(data == 'manuever'){
                                        window.location = "https://imjo.in/jeDFAX";
                                }
                                else if(data == 'wild_soccer'){
                                        window.location = "https://imjo.in/ZN5fxf";
                                }
                                else if(data == 'cs_go'){
                                        window.location = "https://imjo.in/5DJgga";
                                }

                                else if(data == 'kart_wars'){

                                        window.location = "https://imjo.in/kmZ8WZ"; 
                                }

                             }   
                        },
                        error: function (data) {
                            alert("Error Occured!!");
                        }
                    });         
        });


var bool = 0,totalAmount=200;

document.getElementById('amount').innerHTML = totalAmount;

/*function enableRequired() {
    bool++;
    if(bool%2===1) {
        document.getElementById('arc').style.display="";
        //document.getElementById('aero').style.display="";
        //document.getElementById('man').style.display="";
        //document.getElementById('soc').style.display="";
        totalAmount+=500;
    }
    else {
        document.getElementById('arc').style.display="none";
        //document.getElementById('aero').style.display="none";
        //document.getElementById('man').style.display="none";
        //document.getElementById('soc').style.display="none";
        totalAmount-=500;
    }
    document.getElementById('amount').innerHTML = totalAmount;
}

var loc_lan=0,loc_kart=0;

function addlan() {
    loc_lan++;
    if(loc_lan%2===1) {
        totalAmount+=500;
    }
    else {
        totalAmount-=500;
    }
    document.getElementById('amount').innerHTML = totalAmount;
}

function addkart() {
    loc_kart++;
    if(loc_kart%2===1) {
        totalAmount+=3500;
    }
    else {
        totalAmount-=3500;
    }
    document.getElementById('amount').innerHTML = totalAmount;
}*/

var stdIs="IETian";

function enableAll() {
    document.getElementById('pay').style.display="";
    document.getElementById('reg_type').style.display="";
    //document.getElementById('lan_game').style.display="";
    //document.getElementById('rob').style.display="";
    //document.getElementById('kart').style.display="";
    stdIs="Non-IETian";
}

function disableAll() {
    document.getElementById('pay').style.display="none";
    document.getElementById('reg_type').style.display="none";
    //document.getElementById('lan_game').style.display="none";
    //document.getElementById('rob').style.display="none";
    //document.getElementById('kart').style.display="none";
    stdIs="IETian";
}

var reg_type="Registration",rob="",lan="0",kart="0";

function storeValue() {
    //reg section
    if(document.getElementById('sel_reg').checked)
        reg_type = document.getElementById('sel_reg').value;
    else if(document.getElementById('sel_acco_only').checked)
        reg_type = document.getElementById('sel_acco_only').value;
    else if(document.getElementById('sel_acco').checked)
        reg_type = document.getElementById('sel_acco').value;
    else if(document.getElementById('sel_acco_tee').checked)
        reg_type = document.getElementById('sel_acco_tee').value;
    /*if(document.getElementById('sel_gam').checked)
        lan = document.getElementById('sel_gam').value;
    if(document.getElementById('sel_kart').checked)
        kart = document.getElementById('sel_kart').value;*/
    if(document.getElementById('reg_type').checked)
        stdIs = document.getElementById('reg_type').value;
}

var regAmount=200;

function onlyReg() {
    if(document.getElementById('sel_reg').checked) {
        totalAmount-=regAmount;
        regAmount=200;
        totalAmount+=regAmount;
    }
    document.getElementById('amount').innerHTML = totalAmount;
}

function regAcco() {
    if(document.getElementById('sel_acco').checked) {
        totalAmount-=regAmount;
        regAmount=400;
        totalAmount+=regAmount;
    }
    document.getElementById('amount').innerHTML = totalAmount;
}

function regAccoTee() {
    if(document.getElementById('sel_acco_tee').checked) {
        totalAmount-=regAmount;
        regAmount=700;
        totalAmount+=regAmount;
    }
    document.getElementById('amount').innerHTML = totalAmount;
}

function regAccoonly() {
    if(document.getElementById('sel_acco_only').checked) {
        totalAmount-=regAmount;
        regAmount=200;
        totalAmount+=regAmount;
    }
    document.getElementById('amount').innerHTML = totalAmount;
}

disableAll();

(function ($) {
    "use strict";

    // Options for Message
    //----------------------------------------------
    var options = {
        'btn-loading': '<i class="fa fa-spinner fa-pulse"></i>',
        'btn-success': '<i class="fa fa-check"></i>',
        'btn-error': '<i class="fa fa-remove"></i>',
        'msg-success': 'All Good! Redirecting...',
        'msg-error': 'Wrong login credentials!',
        'useAJAX': true,
    };



    // Register Form
    //----------------------------------------------
    // Validation
    $("#register-form").validate({
        rules: {
            reg_fullname: "required",
            reg_password: {
                required: true,
                minlength: 5
            },
            reg_password_confirm: {
                required: true,
                minlength: 5,
                equalTo: "#register-form [name=reg_password]"
            },
            reg_email: {
                required: true,
                email: true
            },
            reg_contact: "required",
            reg_college: "required",
            reg_gender: "required",
            sel_reg: "required",
            reg_agree: "required",
        },
        errorClass: "form-invalid",
        errorPlacement: function (label, element) {
            if (element.attr("type") === "checkbox" || element.attr("type") === "radio") {
                element.parent().append(label); // this would append the label after all your checkboxes/labels (so the error-label will be the last element in <div class="controls"> )
            } else {
                label.insertAfter(element); // standard behaviour
            }
        }
    });

    // Form Submission
    $("#register-form").submit(function () {
        remove_loading($(this));

        if (options['useAJAX'] == true) {
            // Dummy AJAX request (Replace this with your AJAX code)
            // If you don't want to use AJAX, remove this
            var fullname = $('#reg_fullname').val().trim();
            var email = $('#reg_email').val().trim();
            var contact = $('#reg_contact').val().trim();
            var college = $('#reg_college').val().trim();
            var password = $('#reg_password').val().trim();
            var radioValue = $("input[name='reg_gender']:checked").val();
           var radioreg = $("input[name='sel_reg']:checked").val();
            var student = stdIs;
            var data = {
                "fullname": fullname,
                "email": email,
                "password": password,
                "contact": contact,
                "college": college,
                "gender": radioValue,
                "student": student,
                "radioreg": radioreg
            }
            var myJson = JSON.stringify(data);
            if(stdIs == 'IETian'){
                dummy_submit_form_online($(this), myJson);
            }else{
                dummy_submit_form($(this), myJson);
            }

            // Cancel the normal submission.
            // If you don't want to use AJAX, remove this
            return false;
        }
    });



    // Loading
    //----------------------------------------------
    function remove_loading($form) {
        $form.find('[type=submit]').removeClass('error success');
        $form.find('.login-form-main-message').removeClass('show error success').html('');
    }

    function form_loading($form) {
        $form.find('[type=submit]').addClass('clicked').html(options['btn-loading']);
    }

    function form_success($form) {
        $form.find('[type=submit]').addClass('success').html(options['btn-success']);
        $form.find('.login-form-main-message').addClass('show success').html(options['msg-success']);
    }

    function form_failed($form) {
        $form.find('[type=submit]').addClass('error').html(options['btn-error']);
        $form.find('.login-form-main-message').addClass('show error').html(options['msg-error']);
    }

    // Dummy Submit Form (Remove this)
    //----------------------------------------------
    // This is just a dummy form submission. You should use your AJAX function or remove this function if you are not using AJAX.
    function dummy_submit_form($form, myJson) {
        if ($form.valid()) {
            form_loading($form);

            $.ajax({
                url: "./ajax/register.php",
                type: "GET",
                data: {
                    "operation": "saveData",
                    "myJson": myJson
                },

                success: function (data) {
                    if (data == 3) {
                        setTimeout(function () {

                            form_failed($form);
                        }, 1000);
                        setTimeout(function () {
                            alert("The Email that you entered already exist!!");
                        }, 2000);
                    } else if (data == 2) {
                        setTimeout(function () {

                            form_failed($form);
                        }, 2000);
                    } else if(data == 'Registration') {
                        setTimeout(function () {

                            form_success($form);
                        }, 1000);
                        alert('Visit your mail to verify your account and click on OK to proceed for payment!!');
                        window.location = 'https://imjo.in/zUTC5r';
                    }
                    else if(data == 'Accomodation') {
                        setTimeout(function () {

                            form_success($form);
                        }, 1000);
                        alert('Visit your mail to verify your account and click on OK to proceed for payment!!');
                        window.location = 'https://imjo.in/6MVg5B';
                    }
                    else if(data == 'Registration+Accomodation'){

                        setTimeout(function () {

                            form_success($form);
                        }, 1000);
                        alert('Visit your mail to verify your account and click on OK to proceed for payment!!');
                        window.location = 'https://imjo.in/cF2azh';
                    }
                    else if(data == 'Registration+Accomodation+Tshirt'){

                        setTimeout(function () {

                            form_success($form);
                        }, 1000);
                        alert('Visit your mail to verify your account and click on OK to proceed for payment!!');
                        window.location = 'https://imjo.in/YXDyBa';

                    }
                },
                error: function () {
                    alert("Something Wrong");
                }
            });

        } else {
            invalid($form);
        }
    }

    function dummy_submit_form_online($form, myJson) {
        if ($form.valid()) {
            form_loading($form);

            $.ajax({
                url: "./ajax/register.php",
                type: "GET",
                data: {
                    "operation": "saveData_online",
                    "myJson": myJson
                },

                success: function (data) {
                    if (data == 3) {
                        setTimeout(function () {

                            form_failed($form);
                        }, 1000);
                        setTimeout(function () {
                            alert("The Email that you entered already exist!!");
                        }, 2000);
                    } else if (data == 2) {
                        setTimeout(function () {

                            form_failed($form);
                        }, 2000);
                    } else if(data == 1) {
                        setTimeout(function () {

                            form_success($form);
                        }, 1000);
                        alert('Visit your mail to verify your account!!');
                        window.location = './login.php';
                    }
                    
                },
                error: function () {
                    alert("Something Wrong");
                }
            });

        } else {
            invalid($form);
        }
    }



    function invalid($form) {

        form_failed($form);
        remove_loading($form);
    }

})(jQuery);


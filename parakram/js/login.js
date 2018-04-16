 /*window.fbAsyncInit = function() {
    FB.init({
      appId      : '726144220917508',
      xfbml      : true,
      version    : 'v2.12'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
 
 
 // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

   (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.11&appId=726144220917508&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '726144220917508',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });
      
    FB.AppEvents.logPageView();   
      


 
  

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

};
  

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }*/
  




(function($) {
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

	// Login Form
	//----------------------------------------------
	// Validation
  $("#login-form").validate({
  	rules: {
      lg_username: "required",
  	  lg_password: "required",
    },
  	errorClass: "form-invalid"
  });
  
	// Form Submission
  $("#login-form").submit(function() {
  	remove_loading($(this));
		
		if(options['useAJAX'] == true)
		{
			// Dummy AJAX request (Replace this with your AJAX code)
		  // If you don't want to use AJAX, remove this
      
  	  
		  var email = $("#lg_username").val();
      var pass = $("#lg_password").val();
      var data = {
    "email": email,
    "password": pass
  };
  var myJson = JSON.stringify(data);
    dummy_submit_form($(this), myJson);
  
		  // Cancel the normal submission.
		  // If you don't want to use AJAX, remove this
  	  return false;
		}
  });
	
	

	

	// Loading
	//----------------------------------------------
  function remove_loading($form)
  {
  	$form.find('[type=submit]').removeClass('error success');
  	$form.find('.login-form-main-message').removeClass('show error success').html('');
  }

  function form_loading($form)
  {
    $form.find('[type=submit]').addClass('clicked').html(options['btn-loading']);
  }
  
  function form_success($form)
  {
	  $form.find('[type=submit]').addClass('success').html(options['btn-success']);
	  $form.find('.login-form-main-message').addClass('show success').html(options['msg-success']);
  }

  function form_failed($form)
  {
  	$form.find('[type=submit]').addClass('error').html(options['btn-error']);
  	$form.find('.login-form-main-message').addClass('show error').html(options['msg-error']);
  }

	// Dummy Submit Form (Remove this)
	//----------------------------------------------
	// This is just a dummy form submission. You should use your AJAX function or remove this function if you are not using AJAX.
  function dummy_submit_form($form, myJson)
  {
  	if($form.valid())
  	{
  		form_loading($form);
  		
      $.ajax({
    url: "./ajax/login.php",
    type: "GET",
    data: {
      "operation": "saveData",
      "myJson": myJson
    },

    success: function (data) {
      if (data == 1) {
        setTimeout(function() {

        form_success($form);
      }, 1000);
        setTimeout(function() {
        window.location = "dashboard_admin.php";
      },2000);
      }
      else if(data == 2){
        setTimeout(function() {

        form_success($form);
      }, 1000);
        setTimeout(function() {
        window.location = "dashboard.php";
      },2000);
      }
      else if(data == 4){
      	
      	  
      	setTimeout(function() {
	alert('Your Account has not been Verified  Verify your account to login');
        form_failed($form);
      }, 2000);
      }
      else if(data == 'Registration'){
         setTimeout(function() {
         confirm('You have not paid the Registration Fees!! Please Click OK to proceed for payment!!');
         window.location = 'https://imjo.in/zUTC5r';
        form_failed($form);
      }, 2000);
      }
      else if(data == 'Registration+Accomodation'){
        setTimeout(function() {
         confirm('You have not paid the Registration Fees!! Please Click OK to proceed for payment!!');
         window.location = 'https://imjo.in/cF2azh';
        form_failed($form);
      }, 2000);

      }
      else if(data == 'Accomodation'){
        setTimeout(function() {
         confirm('You have not paid the Registration Fees!! Please Click OK to proceed for payment!!');
         window.location = 'https://imjo.in/6MVg5B';
        form_failed($form);
      }, 2000);        
      }
      else if(data == 'Registration+Accomodation+Tshirt'){

          setTimeout(function() {
         confirm('You have not paid the Registration Fees!! Please Click OK to proceed for payment!!');
         window.location = 'https://imjo.in/YXDyBa';
        form_failed($form);
      }, 2000);

      }
      else{
         setTimeout(function() {
        form_failed($form);
      }, 2000);
    }
  },
    error: function () {
      alert("Something Wrong");
    }
  });
  		
  }
    else{
      invalid($form);
    }
  }
  function invalid($form){

        form_failed($form);
      remove_loading($form); 
  }
	
})(jQuery);
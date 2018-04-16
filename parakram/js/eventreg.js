$('.eventreg').addClass("active");

$('#event').change(function(){

	var event = $('#event').val().trim();

	if(event == "cs"){

		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
		$('#main_event').remove();
		$('#ee_and_ec_event').remove();
		$('#me_event').remove();
		$('#designing_event').remove();
		$('#ec_event').remove();
		$('#ce_event').remove();
		$('#che_event').remove();
    	$('#myselect').append('<div class="row" id="cs_event" style="padding-left:15px;"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>EVENT :</label></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><select class="form-control" id="cs_event_name" style="max-width: 18em;"></select></div><br></div>');
    	$('#cs_event_name').append('<option value="0">--- SELECT EVENT ---</option><option value="codathon">Codathon</option><option value="codearena">Codearena</option><option value="webdevs">Webdevs</option><option value="appdroid">Appdroid</option><option value="techquiz">Techquiz</option>');
 
    	$('#cs_event_name').change(function(){

    		if($('#cs_event_name').val() == 'techquiz'){
    			
    			
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
    			

    			

    				var rules = '<div class="row" id="techquiz_rules"><center><u><b>TECH QUIZ</b></u></center><br>';
					rules += '<center>( COMPUTER SCIENCE / INFORMATION TECHNOLOGY DEPARTMENT)</center><br>';
					rules += 'Type : Team of 2 candidates<br>';
					rules += 'Registration amount : ₹20 /– per team<br>';
					rules += 'Prize : ₹1000 /–<br>';
					rules += '<b><u>Rules and Regulations</u></b><br>';
					rules += '• The quiz will be held in 4 rounds.<br>';
					rules += '• The quiz will cover all aspects of technology and applied science.<br>';
					rules += '• Qualifier round : First round will be a pen-paper based quiz.<br>';
					rules += '• 7 teams will be short-listed for the final 3 rounds.<br>';
					rules += '• Details of the final rounds will be revealed on spot.<br>';
					rules += '• The decision of the quizmaster will be final and binding.<br>';
					rules += '<b>For queries, contact: –</b><br>';
					rules += 'Aaditya Vikram ( 9532788252 )<br>';
					rules += 'Kumar Gaurav Singh ( 9889782256 )<br>';
					rules += 'Lakshya ( 9453039032 )<br>';
					rules += 'Naman Agarwal ( 9454067384 )<br>';

					$('#myselect').append(rules);
    			

    			


    			$('#myselect').append('<div class="row" id="cs_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');    		
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var cs_event_name = $('#cs_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("cs_event_name", cs_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("operation", "cs_team_members_2");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});
    		}

    		if($('#cs_event_name').val() == 'appdroid'||$('#cs_event_name').val() == 'codathon'||$('#cs_event_name').val() == 'codearena'){
    			
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
    			
    			if($('#cs_event_name').val() == 'appdroid'){

    					var rules = '<div class="row" id="appdroid_rules"><center><b><u>AppDroid</u></b></center><br>';
						rules += 'Description : The event is designed to bring out the best in you in terms of creativity, thought<br>';
						rules += 'process and designing skills.<br>';
						rules += 'The event consists of two rounds.<br>';
						rules += 'FirstRound : Participants will be given 3 problem Sets (in an order of increasing difficulties.).<br>';
						rules += 'The participants have to design a Realistic, efficient and economical solution idea on a<br>';
						rules += ' solution book( Draw your App design on the screen/explain the idea to tackle the problem set)<br>';
						rules += 'Round Two : Selected participants have to submit the App design.<br>';
						rules += '<b>Rules</b><br>';
						rules += '1. It is an indivisual participant event.<br>';
						rules += '2. Round one will take place on day one. Results will be declared thereafter. Participants moving<br>';
						rules += ' to round two have to submit their app design on last day.<br>';
						rules += '3. Send the design to parakram. ietlucknow@gmail.com<br>';
						rules += '4. Round two is platform independent. Use java, kotlin(ifpossible) else use softwares like<br>';
						rules += 'ADOBEXDCCmakeaminimalistdesign.(4pagesatleast)<br>';
						rules += 'Registration : Free<br>';
						rules += 'Prize money : 1000<br>';
						rules += 'For any queries<br>';
						rules += 'Saransh Bajpai 7905596264<br>';
						rules += 'Naman Arora 7895222276<br><br></div>';

						$('#myselect').append(rules);

    			}

    			if($('#cs_event_name').val() == 'codathon'){

    				var rules = '<div class="row" id="codathon_rules"><center><b><u>CODATHON</u></b></center><br>';

					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>Now you C me (1 Hour).</li>';
					rules += '<li>Debugging and Testing(1 Hour).</li>';
					rules += '<li>I/O Mapping(3 Hour).</li>';
					rules += '<li>BrainStorming (3 Hour).</li>';
					rules += '<li>Simple Coding Contest(3 Hour).</li></ul><br><br>';
					rules += '<b>Description ::</b><br><br>';

					rules += '<ul><li>First Round -- Multiple choice questions based on C Programming.</li>';
					rules += '<li>Second Round -- Find errors or output for the given code.</li>';
					rules += '<li>Third Round -- You’ll be given a executable file which gives output <br>';
					rules += 'for input (under constraint). Find logic and write program for the same.</li>';
					rules += '<li>Fourth Round -- Watch out for the hints and clues hidden in the<br>';
					rules += 'problem statement and submit code accordingly.</li>';
					rules += '<li>Final Round -- Coding contest (To understand more about the <br>';
					rules += 'judging environment,time limits, etc. you can read information about the HackerEarth judge).</li></ul><br><br>';
					rules += '<b>Timeline ::</b><br><br>';

					rules += '<ul><li>Day 1 -- First and Second Round(Offline).</li>';
					rules += '<li>Day 2 -- Third Round(Online on Hackerearth).</li>';
					rules += '<li>Day 3 -- Fourth Round(Online on Hackerearth).</li>';
					rules += '<li>Day 4 -- Fifth Round(Online on Hackerearth).</li></ul><br><br>';
					rules += '<b>Judging Criteria ::</b><br><br>';

					rules += '<ul><li>Each round will have its own weightage.</li>';
					rules += '<li>Points of all the rounds will be added up to the leaderboard.</li>';
					rules += '<li>Winner will be decided according to position on the leaderboard after final round.</li>';
					rules += '<li>You can skip any round(Zero will be awarded for that round).</li>';
					rules += '<li>Event’s AS-COs decision will be final.</li>';
					rules += '<li>You can also send in your queries in an email to ietfractal@gmail.com, during the contest.</li></ul><br></div>';

					$('#myselect').append(rules);
    			}

    			if($('#cs_event_name').val() == 'codearena'){

    				var rules = '<div class="row" id="codearena_rules"><center><u><b>CODEARENA</b></u></center><br>';
    				rules += '<b>Problem Statement ::</b><br><br>';

					rules += 'Write the code for given programming challenge in any programming language.<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>It will contain only one round.</li>';
					rules += '<li>7 questions will be given in the contest.</li>';
					rules += '<li>The contest will be organised on codechef.</li>';
					rules += '<li>The Contest will go on for 7 days.</li></ul><br><br>';
					rules += '<b>Judging Criteria ::</b><br><br>';

					rules += '<ul><li>You will receive one point for solving a problem<br>';
					rules += '(passing all test cases - no partial credit), regardless of the level<br>'; 
					rules += 'of difficulty of that problem.<li>';
					rules += '<li>Users are ranked on leaderboard according to the most problems solved.<br>'; 
					rules += 'Ties will be broken by the total time for each user in ascending order of time.</li></ul><br><br>';
					rules += '<b>Rules and regulation ::</b><br><br>';

					rules += '<ul><li>Individual participation</li>';
					rules += '<li>The total time is the sum of the time consumed for each problem solved.</li>'; 
					rules += '<li>The time consumed for a solved problem is the time elapsed from the beginning<br>'; 
					rules += 'of the contest to the submission of the first accepted run plus 10 penalty minutes<li>';
					rules += 'for every previously rejected run for that problem.</li><br>'; 
					rules += '<li>There is no time consumed for a problem that is not solved.</li>';
					rules += '<li>Please do not discuss strategy, suggestions or tips in the comments<br>';
					rules += 'during a live contest.</li>';
					rules += '<li>Posting questions clarifying the problem statement is ok. If you are unsure,<br>';
					rules += 'email us at ietfractal@gmail.com.</li>';
					rules += '<li>If anyone is using code from some other source in his submission,<br>';
					rules += 'he should provide proper attribution. Failing this, it may be considered<br>';
					rules += 'plagiarism and the submission will be subject to disqualification.</li></ul><br></div>';

					$('#myselect').append(rules);
    			}

    			

    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><center><button id="register" class="btn btn-success">Register</button></center></div>');
    			

    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var cs_event_name = $('#cs_event_name').val().trim();
    				
    				

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("cs_event_name", cs_event_name);
					form_data.append("operation", "cs_team_members_1");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});


    		}

    		

	    	if($('#cs_event_name').val() == 'webdevs'){

	    		
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
	    		
	    		

	    			var rules = '<div class="row" id="webdevs_rules"><center><b><u>GAME OF WEBDEVS</u></b></center><br>';
					rules += '<b>Problem Statement ::</b><br><br>';

					rules += 'Design a website on a particular pre announced Theme.<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>The event will be of 7 days. Teams have to submit a git account<br>';
					rules += 'on which all the progress will be changed and the progress of the<br>';
					rules += 'website will be monitored. Other team members must be contributors of the<br>';
					rules += 'Website repository made under the leader git account.</li>';
					rules += '<li>Teams will have to design a website with a minimum of 5 pages atleast.<br>';
					rules += 'Mandatory pages on website are HOMEPAGE, REGISTRATION PAGE and<br>';
					rules += 'A QUERY PORTAL(it can have its separate pages or can be embedded in some other page).<br>';
					rules += 'Other pages than these, will fetch you extra points based on its importance,<br>';
					rules += 'uniqueness and design on website.</li>';
					rules += '<li>Theme of the website will be announced at the starting of event.<br>';
					rules += 'Sticking to the theme is must.</li>';
					rules += '<li>Teams can use all the resources available online ( Like: codepen).<br>';
					rules += 'A proper readme.md file of all the tools, Open Source code, layout that are<br>';
					rules += 'used on the website specifying all the link need to be mentioned.</li></ul><br><br>'; 
					rules += '<b>Judging Criteria :</b><br><br>';

					rules += '<ul><li>The focus is on the Design of the website. The more elegant<br>';
					rules += 'it is, the more rewarding it will be.</li>';
					rules += '<li>Resources used and responsive nature of the website.</li>';
					rules += '<li>Last but not the least Team spirit! . Make sure every team member has a descent contribution in it.</li></ul><br></div>';

					$('#myselect').append(rules);
	    		

	    		$('#myselect').append('<div class="row" id="cs_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 3 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_3" placeholder="Optional"></div></div><br></div>');				    			
	    		

	    		$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');	

	    		$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var cs_event_name = $('#cs_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();
    				var team_mem_3 = $('#team_mem_3').val().trim();
    				

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("cs_event_name", cs_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("team_mem_3", team_mem_3);
					
					form_data.append("operation", "cs_team_members_3");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

	    	}
    	
    	});
	}
	
	if(event == 'designing'){

		
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
		$('#main_event').remove();
		$('#cs_event').remove();
		$('#me_event').remove();
		$('#ee_and_ec_event').remove();
		
		$('#ce_event').remove();
		$('#che_event').remove();

		$('#myselect').append('<div class="row" id="designing_event" style="padding-left:15px"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>EVENT:</label></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><select class="form-control" id="designing_event_name" style="max-width: 18em;"></select></div><br><br></div>');		
		$('#designing_event_name').append('<option value="0">--- SELECT EVENT ---</option><option value="animatrix">Animatrix</option><option value="dj_wars">DJ Wars</option><option value="googler">Googler</option><option value="posterolic">Posterholic</option><option value="ciphertech">Ciphertech</option>');		
	
		$('#designing_event_name').change(function(){

			if($('#designing_event_name').val() == 'animatrix'){

    			
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();

	    		
	    		

	    			var rules = '<div class="row" id="animatrix_rules"><center><b><u>Animatrix</u></b></center><br>';
					rules += '<b>Problem Statement ::</b><br><br>';

					rules += 'A scene based on a theme will be provided which is to be implemented with<br>';
					rules += 'the help of any video editing software, Adobe After Effects preferably.<br>';
					rules += 'Using the CHROMA KEY effect/ MASKING mainly the team have to submit<br>';
					rules += 'their animated videos.<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>The event will be of three days from the starting day of Parakram.<br>';
					rules += 'A video booth with a green background, will be displayed for the<br>';
					rules += 'teams to record the clip scenes.</li>';
					rules += '<li>Teams have to shoot the clips ,compile them, edit them, voice over :<br>'
					rules += 'in short do every possible editing to make the video more lively.</li>';
					rules += '<li>The background images/videos over which the clips have to masked<br>';
					rules += 'will be revealed on the first day of the fest.</li>';
					rules += '<li>The edited video has to be send via mail or handed in person the event coordinator.</li></ul><br><br>';
					rules += '<b>Judging Criteria :</b>';

					rules += '<ul><li>The perfection in shooting the clips.</li>';
					rules += '<li>The editing of the videos.</li>';
					rules += '<li>Last but not the least Team spirit! . Make sure every team member has a descent contribution in it.</li></ul><br></div>';

					$('#myselect').append(rules);

	    		

	    		$('#myselect').append('<div class="row" id="designing_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 3 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_3" placeholder="Optional"></div></div><br></div>');
    			
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');	

	    		$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var designing_event_name = $('#designing_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();
    				var team_mem_3 = $('#team_mem_3').val().trim();
    				

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("designing_event_name", designing_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("team_mem_3", team_mem_3);
					
					form_data.append("operation", "designing_team_members_3");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

	    	}

	    	 if($('#designing_event_name').val() == 'googler'|| $('#designing_event_name').val() == 'ciphertech'){

				
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();   	 	

    			if($('#designing_event_name').val() == 'googler'){

    				var rules = '<div class="row" id="googler_rules"><center><u><b>GOOGLER</b></u></center><br>';
    				rules += '<b>Problem Statement ::</b><br><br>';

					rules += 'You will be given a piece of information in the form of textual<br>';
					rules += 'or visual content. Your objective is to generate a Google search result<br>';
					rules += 'based on the given information within the specified time constraint.<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>You can form a team of exactly two candidates, and any number of teams can participate.</li>';
					rules += '<li>7 teams will be shortlisted for the final round based on the scores of the shortlisting round.</li>';
					rules += '<li>All the rounds will be consisting of a set of problems associated with a specified time limit.</li>';
					rules += '<li>Your task is to generate an exact Google search result based on the problem / information.</li>';
					rules += '<li>The team which first reports the exact Google search result will be rewarded with points</li></ul><br></div>';

					$('#myselect').append(rules);
    			}

    			if($('#designing_event_name').val() == 'ciphertech'){

    				var rules = '<div class="row" id="ciphertech_rules"><center><u><b>CIPHERTECH</b></u></center><br>';
    				rules += '<b>Problem Statement ::</b><br><br>';

					rules += 'You will be given a piece of information in the form of textual<br>';
					rules += 'or visual content. Your objective is to discover hidden patterns<br>'; 
					rules += 'in given data, decipher encrypted messages and reach to the solution of problem.<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>You can form a team of exactly two candidates, and any number of teams can participate.</li>';
					rules += '<li>Challenge will be hosted on FTP server in computer labs of Computer Science Department.</li>';
					rules += '<li>The challenge will consist of only one round of 90 minutes.</li></ul><br></div>';

					$('#myselect').append(rules);
    			}

    			$('#myselect').append('<div class="row" id="designing_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');    		
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var designing_event_name = $('#designing_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("designing_event_name", designing_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("operation", "designing_team_members_2");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});
			}

			if($('#designing_event_name').val() == 'dj_wars'|| $('#designing_event_name').val() == 'posterolic'){


				
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();

    			if($('#designing_event_name').val() == 'dj_wars'){


    				var rules = '<div class="row" id="dj_wars_rules"><center><u><b>DJ WARS</b></u></center><br>';
    				rules += '<b>Problem Statement :</b><br><br>';

					rules += 'Participants will be provided with the Acapella of a song and they<br>';
					rules += 'will have to build music around the Acapella, thus creating their own<br>';
					rules += 'version of the song, ie, the remix of the song.<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>Participants will be given a time limit of 10 days from the<br>';
					rules += 'day Acapella is uploaded on the website.</li>';
					rules += '<li>Use of any DAW is allowed.</li>';
					rules += '<li>Participants will have to send their remix on the email provided<br>';
					rules += 'before the deadline.</li></ul><br>';
					rules += '<b>Judging Criteria ::</b><br><br>';

					rules += '<ul><li>Judging will be done on the basis of how cachy the remix is and the creativity of the DJ.</li></ul><br></div>'

					$('#myselect').append(rules);
    			}

    			if($('#designing_event_name').val() == 'posterolic'){


    				var rules = '<div class="row" id="posterolic_rules"><center><u><b>POSTERHOLIC</b></u></center><br>';
    				rules += '';

    				$('#myselect').append(rules);

    			}

    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><center><button id="register" class="btn btn-success">Register</button></center></div>');
    			

    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var designing_event_name = $('#designing_event_name').val().trim();
    				
    				

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("designing_event_name", designing_event_name);
					form_data.append("operation", "designing_team_members_1");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

			}


		});

	}

	if(event == 'ee_and_ec'){

		
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
		$('#main_event').remove();
		$('#cs_event').remove();
		$('#me_event').remove();
		$('#designing_event').remove();
		$('#ce_event').remove();
		$('#che_event').remove();
		$('#myselect').append('<div class="row" id="ee_and_ec_event" style="padding-left:15px"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>EVENT:</label></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><select class="form-control" id="ee_and_ec_event_name" style="max-width: 18em;"></select></div><br><br></div>');		
		$('#ee_and_ec_event_name').append('<option value="0">--- SELECT EVENT ---</option><option value="avishkar">Avishkar</option><option value="resiwars">Resiwars</option><option value="logic_armers">Logic Armers</option><option value="circuitron">Circuitrons</option><option value="transcednce">Transcednce</option><option value="buzzwire_pinball">Buzzwire/Pinball</option>');		
	
		$('#ee_and_ec_event_name').change(function(){
			

	    if($('#ee_and_ec_event_name').val() == 'circuitron'|| $('#ee_and_ec_event_name').val() == 'resiwars'|| $('#ee_and_ec_event_name').val() == 'logic_armers'|| $('#ee_and_ec_event_name').val() == 'buzzwire_pinball'){

	    	
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
    			

    			if($('#ee_and_ec_event_name').val() == 'circuitron'){

    				var rules = '<div class="row" id="circuitron_rules"><center><b><u>CIRCUITRONS</u></b></center><br>';

					rules += '<b>Problem Statement:</b><br><br>';

					rules += 'Design an Electrical circuit of a given output i.e. voltage/ Current<br>';
					rules += 'by using minimum no. of elements<br><br>';
					rules += '<b>Rounds and details::</b><br><br>';

					rules += '<ul><li>There would be basically one to two rounds of this event.</li>';
					rules += '<li>Candidates has to participate in teams. A team should comprise of atmost 2 members.</li>';
					rules += '<li>Time duration would be provided and you have to complete the task within the time interval.</li></ul><br>';
					rules += '<b>Judging Criteria:</b><br><br>';

					rules += '<ul><li>Accuracy of the output.</li>';
					rules += '<li>Time consumption should be minimum.</li>';
					rules += '<li>No. of elements used should be minimum.</li>';
					rules += '<li>Explanation</li></ul><br></div>';

					$('#myselect').append(rules);

					$('#myselect').append('<div class="row" id="ee_and_ec_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2"></div></div><br></div>');
    				
    				$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');    		
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var ee_and_ec_event_name = $('#ee_and_ec_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("ee_and_ec_event_name", ee_and_ec_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("operation", "ee_and_ec_team_members_2");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});
    			}

    			if($('#ee_and_ec_event_name').val() == 'resiwars'){


    				var rules = '<div class="row" id="resiwars_rules"><center><b><u>RESIWARS</u></b></center><br>';
    				rules += '<b>Problem Statement :</b>,br><br>';

					rules += 'A value of resistance of an individual resister or equivalent of some<br>';
					rules += 'resisters will be provided and you have to pick a practical resister of same value.<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>ROUND 1-Bunch of practical resisters will be provided you at the<br>';
					rules += 'time of event, values of magnitude of individual resistances will be<br>';
					rules += 'announce and you have to pick resisters of same value.</li>';
					rules += '<li>ROUND 2-A Bunch of practical resisters will be provided but this<br>';
					rules += 'time magnitude of equivalent of some resisters will be announce and<br>';
					rules += 'you have to choose the resisters that carry equivalent resistance as<br>';
					rules += 'same of announced value.</li></ul><br>';
					rules += '<b>Judging Criteria :</b><br><br>';

					rules += 'Basically time and accuracy will be the judging criteria of this event.<br>';
					rules += 'In layman terms first one and right one will be the winner.<br><br>';
					rules += '<b>Rules and regulation :</b><br><br>';

					rules += '<ul><li>Maximum of two members are allowed per team.</li>';
					rules += '<li>All the material will be provided during the event so no need to carry your own.</li>';
					rules += '<li>Any electrical or electronic device except calculator are not allowed<br>';
					rules += 'during the event.</li>';
					rules += '<li>It is all your responsibility to return all the materials which are<br>'; 
					rules += 'provided during the event.</li>';
					rules += '<li>The decision of the JURY/HEAD will be final and binding.</li></ul><br></div>';

					$('#myselect').append(rules);

					$('#myselect').append('<div class="row" id="ee_and_ec_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2" placeholder="Optional"></div></div><br></div>');
    				
    				$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');    		
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var ee_and_ec_event_name = $('#ee_and_ec_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("ee_and_ec_event_name", ee_and_ec_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("operation", "ee_and_ec_team_members_max2_min1");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

    			}

    			if($('#ee_and_ec_event_name').val() == 'logic_armers'){

    				var rules = '<div class="row" id="logic_armers_rules"><center><b>LOGIC ARMERS</u></b></center><br>';
    				rules += '<b>Problem Statement :</b><br><br>';

					rules += 'To implement basic Boolean expressions using the ICs on breadboard. Gates that<br>';
					rules += 'we will use are AND, OR, NOR, NAND NOT etc.<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>ROUND 1-It will be basic quiz based on logic family and Boolean algebra.</li>';
					rules += '<li>ROUND 2-In this round you have to Implement logic circuit or Boolean expression<br>';
					rules += 'on bread board using the ICs and power supply.</li>';
					rules += '<li>ROUND 3-Participants have to implement some higher level logic circuits<br>';
					rules += 'or Boolean expression using the above concept.</li></ul><br>';
					rules += '<b>Judging Criteria :</b><br><br>';

					rules += '<ul><li>Time and accuracy will be the main parameters of this event.</li>';
					rules += '<li>Expected output must be there in your implemented circuit.</li>';
					rules += '<li>A participant with fast and right output circuit, will be the winner.</li></ul><br>';
					rules += '<b>Rules and regulation :</b><br><br>';

					rules += '<ul><li>Maximum of two members are allowed per team.</li>';
					rules += '<li>All the material will be provided during the event so no need to carry your own.</li>';
					rules += '<li>Any electrical or electronic device except calculator are not allowed during the event.</li>';
					rules += '<li>You may have to deal with AC/DC sources, so be careful and follow precautions while performing the task.</li>';
					rules += '<li>The decision of the JURY/HEAD will be final and binding.</li></ul><br></div>'

    				$('#myselect').append(rules);

    				$('#myselect').append('<div class="row" id="ee_and_ec_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2" placeholder="Optional"></div></div><br></div>');
    			
    				$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');    		
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var ee_and_ec_event_name = $('#ee_and_ec_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("ee_and_ec_event_name", ee_and_ec_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("operation", "ee_and_ec_team_members_max2_min1");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

    			}

    			if($('#ee_and_ec_event_name').val() == 'buzzwire_pinball'){

    				var rules = '<div class="row" id="buzzwire_pinball_rules"><center><b>BUZZWIRE/PINBALL</u></b></center><br>';
    				rules += '<b>About</b><br><br>';

					rules += 'In this event, a pinball has to be passed through the given arena with<br>';
					rules += 'the use of two magnets.With the help of these magnets, dipoles gets created<br>';
					rules += 'which results in forces of attraction or repulsion which helps in acceleration<br>';
					rules += 'or retardantion of a pinball.<br><br>';
					rules += '<b>Problem Statement :</b><br><br>';

					rules += 'Your task is to move the pinball through the given arena,in minimum time interval crossing all the checkpoints.<br><br>';
					rules += '<b>Judging Criteria :</b><br><br>';

					rules += '<ul><li>Crossing all the checkpoints in minimum time Interval.</li>';
					rules += '<li>Less no. of man handling should be done, as points would get deducted.</li>';
					rules += '<li>One who scores most no. of points will be the winner.</li></ul><br></div>'

					$('#myselect').append(rules);

					$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');    		
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var ee_and_ec_event_name = $('#ee_and_ec_event_name').val().trim();
    				
    				

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("ee_and_ec_event_name", ee_and_ec_event_name);
					form_data.append("operation", "ee_and_ec_team_members_1");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

    			}

    			
    			
    		}

    		if($('#ee_and_ec_event_name').val() == 'transcednce'|| $('#ee_and_ec_event_name').val() == 'avishkar'){

    			
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();

    			if($('#ee_and_ec_event_name').val() == 'transcednce'){

    				var rules = '<div class"row" id="transcednce_rules"><center><b><u>TRANSCEDNCE</u></b></center><br>';

					rules +='<b>Problem Statement :</b><br><br>';

					rules +='A value of resistance of an individual resister or equivalent of<br>';
					rules +='some resisters will be provided and you have to pick a practical resister<br>';
					rules +='of same value. Design an Electrical equipment by using different types of<br>';
					rules +='accessories provided ex: thermocol, ice-cream sticks etc.<br>';
					rules +='(one has to use 70% of the accessories provided and you can bring two extra<br>';
					rules +='accessories by yourself)<br><br>';
					rules +='<b>Rounds and details ::</b><br><br>';

					rules +='<ul><li>There would be basically one to two rounds of this event.</li>';
					rules +='<li>Time duration would be provided and you have to complete the task within<br>';
					rules +='the time interval.</li></ul><br>';
					rules +='<b>Judging Criteria :</b><br><br>';

					rules +='<ul><li>The closer you are to an extremely innovative idea, the more are your chances of winning.</li>';
					rules +='<li>The presentation and design are the key factors for scoring.</li></ul><br></div>';

					$('#myselect').append(rules);
    			}

    			if($('#ee_and_ec_event_name').val() == 'avishkar'){

    				var rules = '<div class"row" id="avishkar_rules"><center><b><u>AVISHKAR</u></b></center><br>';
    				rules += '<b>Problem Statement :</b><br><br>';

					rules += 'In this event participants will have to make a project addressing real life problems.<br>';
					rules += 'Any project that may find applications in real life will be entertained.<br>';
					rules += 'Participants need to explain that in front of judges (presentation will be preferred).<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>A team of maximum of four members will be allowed to take part in this event.</li>';
					rules += '<li>There will be single round in this event.</li>';
					rules += '<li>Your prototype should be working during the presentation.</li><br></ul>';
					rules += '<b>Judging Criteria ::</b><br><br>';

					rules += '<ul><li>Your concept related to your project.</li>';
					rules += '<li>Working of your prototype at the time of presentation.</li><br></ul>';
					rules += '<b>Rules and regulation :</b><br><br>';

					rules += '<ul><li>Individual participation</li>';
					rules += '<li>Participants will have to submit an abstract giving brief explanation<br>';
					rules += 'of their project.</li>';
					rules += '<li>Participant will have to make their project functional in the allotted time limit.</li>';
					rules += '<li>Participants are free to choose the topic of electronics project</li></ul><br></div>';

					$('#myselect').append(rules);

    			}

	    		$('#myselect').append('<div class="row" id="ee_and_ec_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 3 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_3" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 4 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_4" placeholder="Optional"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');	

	    		$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var ee_and_ec_event_name = $('#ee_and_ec_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();
    				var team_mem_3 = $('#team_mem_3').val().trim();
    				var team_mem_4 = $('#team_mem_4').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("ee_and_ec_event_name", ee_and_ec_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("team_mem_3", team_mem_3);
					form_data.append("team_mem_4", team_mem_4);
					form_data.append("operation", "ee_and_ec_team_members_4");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

	    	} 
	    });

	}

	if(event == 'me'){

		
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
		$('#main_event').remove();
		$('#cs_event').remove();
		$('#ee_and_ec_event').remove();
		$('#designing_event').remove();
		$('#ce_event').remove();
		$('#che_event').remove();
		$('#myselect').append('<div class="row" id="me_event" style="padding-left:15px;"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>EVENT:</label></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><select class="form-control" id="me_event_name" style="max-width: 18em;"></select></div><br></div>');
		$('#me_event_name').append('<option value="0">--- SELECT EVENT ---</option><option value="inertia">Inertia</option><option value="techlocked">Techlocked</option><option value="tesla">Tesla</option>');	

		$('#me_event_name').change(function(){

			if($('#me_event_name').val() == 'inertia'|| $('#me_event_name').val() == 'techlocked'|| $('#me_event_name').val() == 'tesla'){

				
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();

    			if($('#me_event_name').val() == 'inertia'){

    				var rules = '<div class"row" id="inertia_rules"><center><b><u>INERTIA</u></b></center><br>';
    				rules += '<b>Problem Statement ::</b><br><br>';

					rules += 'Design a prototype of a kart which can convert potential energy into kinetic energy.<br><br>';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules += '<ul><li>There will be two rounds – one VIRTUAL and the other DYNAMIC</li>';
					rules += '<li>VIRTUAL ROUND In the virtual round, each team has to describe the<br>';
					rules += 'idea/mechanism to the judges. A team copying the mechanism from the internet<br>';
					rules += 'or failing to describe or justify its mechanism would stand disqualified.<br>';
					rules += 'The cost of Manufacturing will also be evaluated. The cheaper, the better.</li>';
					rules += '<li>DYNAMIC ROUND In the dynamic round, teams will compete amongst each other<br>';
					rules += 'on the following basis: Acceleration Distance covered Deviation from straight<br>';
					rules += 'line path Recoil.</li></ul><br>';
					rules += '<b>Rules ::</b><br><br>';

					rules += '<ul><li>The dimensions of the cart are: The length should be in the range of 15-35 cm.<br>';
					rules += 'The breadth should be in the range of 10-15 cm. The height of the cart (its topmost part)<br>';
					rules += 'should be below 15 cm.</li>';
					rules += '<li>Participants will be given 2 chances for qualifying through each phase.<br>';
					rules += 'Also individual phase top scorers will also be awarded.</li>';
					rules += '<b>Judging Criteria ::</b><br><br>';

					rules += 'They will be awarded points for each of the 4 parameters and based on the<br>';
					rules += 'total point’s winners will be decided. Theses paramaters include – Acceleration<br>';
					rules += 'Distance covered Deviation from straight line path Recoil.<br></div'

					$('#myselect').append(rules);
    			}

    			if($('#me_event_name').val() == 'techlocked'){

    				var rules = '<div class"row" id="techlocked_rules"><center><b><u>TECHLOCKED</u></b></center><br>';
    				rules += '<b>Problem Statement ::</b><br><br>';
    				
    				rules+='Solve through a set of clues whick direct you to objects from the workshop. Be the winner by finding your path through workshop tools and machines.';
					rules += '<b>Rounds and details ::</b><br><br>';

					rules+='<ul><li>The event will take place in two rounds.<li>';
					rules+='<li>The first round will be simple yet interesting. Simple and logical clues will provided to the participants who would be required to click pictures of tools or machines or other stuff which they feel would be suitable answer to the clue provided to them. Clearing the first clue, the participants would be provided with another clue with a slightly higher difficult level. Thus they will be required to pass through a chain of clues before they move on to the second round of the event.</li>';
					rules+='<li>The second round would be a tricky one wherein they will be provided with some extremely simple jobs (or tasks). The participating teams will be required to strategise the steps that they would need to follow in order to achieve the requisite goal. In addition to this, they will also need gather photographs of tools or machines that would be required during the manufacturing process.</li></ul>';

					rules += '<b>Rules ::</b><br><br>';
					rules+='<ul><li>MThe teams can use mobile phones only for the purpose clicking pictures. Any team member caught using the internet or taking any sort of help using phone calls or text book pdfs would be disqualified.</li>';
					rules+='<li>Since, the event would take place majorly in the workshop area, the participants would be required to be wearing shoes which is the general rule of workshop which has to followed under all circumstances<li></ul>';

					rules += '<b>Judging Criteria ::</b><br><br>';
					rules+='<ul><li>Both the round will be bounded by certain time intervals. The teams failing to complete the task in required time will be directly disqualified.</li><ul>';

					$('#myselect').append(rules);
    			}

    			if($('#me_event_name').val() == 'tesla'){

    				var rules = '<div class"row" id="tesla_rules"><center><b><u>TESLA</u></b></center><br>';
    				rules += '<b>Problem Statement ::</b><br><br>';

    				rules+='Make the most efficient design form given size requirements and other specifications.';
    				rules += '<b>Rounds and details ::</b><br><br>';

    				rules+='';

    				rules += '<b>Rules ::</b><br><br>';
    				rules+=

    				rules += '<b>Judging Criteria ::</b><br><br>';

					$('#myselect').append(rules);
    			}

	    		$('#myselect').append('<div class="row" id="me_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1""></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 3 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_3" placeholder="Optional"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');	

	    		$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var me_event_name = $('#me_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();
    				var team_mem_3 = $('#team_mem_3').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("me_event_name", me_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("team_mem_3", team_mem_3);
					form_data.append("operation", "me_team_members_3");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

	    	}

		});
	}

	if(event == 'ce'){


		
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
		$('#main_event').remove();
		$('#cs_event').remove();
		$('#ee_and_ec_event').remove();
		$('#me_event').remove();
		$('#designing_event').remove();
		$('#che_event').remove();
		$('#myselect').append('<div class="row" id="ce_event" style="padding-left:15px;"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>EVENT:</label></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><select class="form-control" id="ce_event_name" style="max-width: 18em;"></select></div><br></div>');
		$('#ce_event_name').append('<option value="0">--- SELECT EVENT ---</option><option value="picturesque">Picturesque</option><option value="millau_vaiduct">Millau Vaiduct</option><option value="jam_on_ham">Jam On Ham</option><option value="aquatown">Aquatown</option>');	
	
		$('#ce_event_name').change(function(){
			if($('#ce_event_name').val() == 'picturesque'){		
				
				
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
    			

    				var rules = '<div class="row" id="picturesque_rules"><center><b><u>PICTURESQUE</u></b></center><br>';
					rules += 'A special treat for all photography enthusiasts!<br>';
					rules += 'PARAKRAM announces the Safety First Photography contest-<br>';
					rules += '1. Submit a photograph on the theme Safety First that portrays<br>'; 
					rules += 'the risk and hazards of construction workers.<br>';
 					rules += '2. Submissions should include a proper write-up (not more than 150 words) figuring<br>'; 
 					rules += 'out the risk of Construction Workers and by which means it can be prevented.<br>';
 					rules += '3. Send the photograph and write up files to (parakram2k17ietlko@gmail.com)<br>'; 
 					rules += 'along with the details: Full name, Affiliated Institute, Mobile Number and <br>';
 					rules += 'email ID in the body of the mail.<br>';

					rules += 'The goal of the contest is to kick off a national collaboration<br>'; 
					rules += 'that relies on your Talent, Imagination and Creativity to raise awareness<br>';
					rules += 'of workplace safety and health. Your creative entry can either focus on<br>'; 
					rules += 'prevention of work accidents or injuries, or creating safety and health awareness<br>';
					rules += 'highlighting the risk of the labor in construction works.<br>';
					rules += 'Participate in the competition and Let your imagination speak for itself !!<br>';

					rules += '<b>Event Manger:</b><br>';                   

					rules += 'Ritesh Rai (7408387873)<br>';         
                    rules += 'Ujjwal Shukla (8423474982)<br>';
                    rules += '<b>Coordinator:</b><br>';
					rules += 'Kavita Faujdar (8006553465)<br>';                 
                    rules += 'Sahil Sagar (7973558438)<br></div>';

                    $('#myselect').append(rules);
    			


    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var ce_event_name = $('#ce_event_name').val().trim();
    				
    				

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("ce_event_name", ce_event_name);
					form_data.append("operation", "ce_team_members_1");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});
	    }

	    if($('#ce_event_name').val() == 'millau_vaiduct'){

	    	
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();

    				var rules = '<div class="row" id="millau_vaiduct_rules"><center><b><u>Millau Vaiduct</u></b></center><br>';

					rules += 'Build a structure as you wish from the materials given to you,<br>'; 
					rules += 'where your imagination is the only restriction.<br>';
					rules += 'The best models based on the various fields will be declared winners and awarded prizes.<br>';
					rules += '<b>Event Struture</b><br>';
					rules += '•	No. of participants in a team can be 1-6<br>';
					rules += '•	Specific time will be given to each team,they have to complete their work in that period.<br>';

					rules += '<b>Materials</b><br>';
					rules += 'Popsicles/ice-cream sticks , fevicol,threads(can be used for construction<br>';
					rules += 'but should not be present in final structure) , etc.<br>';
					rules += '•	Sticks can be altered physically by cutting or notching at any angle .<br>';
					rules += '•	No extra material other than the provided ones are allowed.<br>';
					rules += '<b>Dimensions and Weight Specification</b><br>';
					rules += '•The Bridge dimensions should be within the specified limits of: <br>';
					rules += 'o Length = 56-60 cm<br>'; 
					rules += 'o Width = 10-11 cm<br>';
					rules += 'o Height = 12-16 cm<br>';
					rules += '•The members of the bridge can be built by grouping a maximum of 8 sticks together. <br>';
					rules += '•Clear distance: An 8cm high by 10cm wide clearance must be provided<br>';
					rules += 'along the entire length of the bridge. <br>';

					rules += '<b>Judging and Scoring</b><br>';
					rules += 'The scoring of the structure will be based on performance as well as aesthetics.<br>';
					rules += 'The bridge will be scored on how well the material has been used to support the load.<br>'; 
					rules += '•The platform will be same for every team and will be placed at the middle of the structure. <br>';
					rules += '•The bridge model will be loaded till failure. The maximum deflection at the point<br>';
					rules += 'of yielding and the load at that moment will be also used to evaluate the structure. <br>';

					rules += 'In engineering , the best solution may not always be the biggest or strongest bridge .<br>';
					rules += 'Judges will judge the bridge based on the detail to connections and members ,<br>';
					rules += 'the uniqueness of the design and its overall look.<br>';

					rules += '	The best part is there are Prizes and Gift Vouchers also.<br>'; 

					rules += '<b>EVENT VENUE:</b> AUDITORIUM<br>';

 					rules += '<b>Event Manager:</b><br>';                                                                    
                                                                                    
      				rules += 'Aditi Sharma (9917941172)<br>';                                
      				rules += 'Kavita Faujdar (8006553465)<br>';

					rules += '<b>Coordinator:</b><br>';
					rules += 'Ujjwal Shukla (8423474982)<br>';
					rules += 'Sahil Sagar (7973558438)<br></div>';

					$('#myselect').append(rules);

	    		$('#myselect').append('<div class="row" id="ce_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 3 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_3" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 4 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_4" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 5 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_5" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 6 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_6" placeholder="Optional"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');	

	    		$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var ce_event_name = $('#ce_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();
    				var team_mem_3 = $('#team_mem_3').val().trim();
    				var team_mem_4 = $('#team_mem_4').val().trim();
    				var team_mem_5 = $('#team_mem_5').val().trim();
    				var team_mem_6 = $('#team_mem_6').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("ce_event_name", ce_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("team_mem_3", team_mem_3);
					form_data.append("team_mem_4", team_mem_4);
					form_data.append("team_mem_5", team_mem_5);
					form_data.append("team_mem_6", team_mem_6);
					form_data.append("operation", "ce_team_members_6");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

	    	}

	    	if($('#ce_event_name').val() == 'jam_on_ham'){

	    		
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();


    				var rules = '<div class="row" id="jam_on_ham_rules"><center><b><u>J-A-M on H-A-M</b></u></center><br>';
					rules += '<b>INTRODUCTION:</b><br>';
					rules += 'Just A Minute on Half A Minute<br>';
					rules += 'Is an extempore seasoned with a twist<br>';
					rules += '<b>Rules & Judging:</b><br>';
					rules += 'The participants will get their respective topics by picking random chits.<br>'; 
					rules += 'The participants can interrupt each other on account of awkward pauses,<br>';
					rules += 'repetitions, digression from the topic, grammatical errors and hesitation.<br>';
					rules += 'It will solely be the discretion of the judge to decide whether<br>';
					rules += 'the interruption is valid or not.<br>';
					rules += 'If valid, the participant interrupting will be required to speak <br>';
					rules += 'for the remnant time, from where the interrupted participant had left off.<br>';
					rules += 'This participant gets 5 marks for completing half a minute if he speaks<br>';
					rules += 'for the remainder time to complete a speech of 30 sec after the<br>';
					rules += 'previous participant, without interruption from any other participant.<br>';
					rules += 'And 10 marks if he completes a speech time of 60 sec without interruption.<br>';
					rules += '<b>Time alloted to prepare for topic:</b> 5 minutes<br>';
					rules += '<b>Number of participants in a team:</b> 2<br>';
					rules += '<b>Judging and scoring:</b><br>';
					rules += '1.The team with maximum points in the end wins the game<br>'; 	
					rules += '2.JAM Master is GOD.  And the rule book bible.... remember it!<br>';
					rules += 'Attractive prize money and gift hampers awaits you.<br>';
					rules += '<b>Event Venue:</b> Auditorium<br>';
					rules += '<b>Event managers:</b><br>';                                                                                                             
					rules += 'Janhavi Singh (8173801845)<br>';
					rules += 'Aditi Sharma<br>';                                                                                                         
					rules += '<b>Coordinator:</b><br>';

					rules += 'Ujjwal Shukla<br>';
					rules += 'Sahil Sagar (7973558438)<br></div>';

					$('#myselect').append(rules);
    			

    			$('#myselect').append('<div class="row" id="ce_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2" placeholder="Optional"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');    		
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var ce_event_name = $('#ce_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("ce_event_name", ce_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("operation", "ce_team_members_2");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});
    		}

    		if($('#ce_event_name').val() == 'aquatown'){

    			
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
    			
    			var rules = 

    			$('#myselect').append(rules);

    			$('#myselect').append('<div class="row" id="ce_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 3 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_3" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 4 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_4" placeholder="Optional"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 5 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_5" placeholder="Optional"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');	

	    		$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var ce_event_name = $('#ce_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();
    				var team_mem_3 = $('#team_mem_3').val().trim();
    				var team_mem_4 = $('#team_mem_4').val().trim();
    				var team_mem_5 = $('#team_mem_5').val().trim();
    				

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("ce_event_name", ce_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("team_mem_3", team_mem_3);
					form_data.append("team_mem_4", team_mem_4);
					form_data.append("team_mem_5", team_mem_5);
					
					form_data.append("operation", "ce_team_members_5");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

    		}


	  });
	}

	if(event == 'che'){

		
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
		$('#main_event').remove();
		$('#cs_event').remove();
		$('#ee_and_ec_event').remove();
		$('#me_event').remove();
		$('#designing_event').remove();
		$('#ce_event').remove();
		$('#myselect').append('<div class="row" id="che_event" style="padding-left:15px;"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>EVENT:</label></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><select class="form-control" id="che_event_name" style="max-width: 18em;"></select></div><br></div>');
		$('#che_event_name').append('<option value="0">--- SELECT EVENT ---</option><option value="jugadupreneur">Jugadupreneur</option><option value="chemaware">Chemaware</option><option value="chem_e_car">Chem-E-Car</option><option value="aquamania">Aquamania</option>');	
	
		$('#che_event_name').change(function(){

			if($('#che_event_name').val() == 'jugadupreneur'){

				
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();

    				var rules = '<div class="row" id="jugadupreneur_rules"><center><b><u>FRUGAL</u></b></center><br>'; 
					rules += 'Making some useful productive things from the waste materials in cost effective way<br>';
					rules += '<b>Rules and Regulations-</b><br>';
					rules += '•	Min. 2 members in a team<br>';
					rules += '•	Present your model and describe them.<br>';
					rules += '•	Winner will decide according to the model, presentation and cross questions.<br>';
					rules += 'Time duration: 1 hr<br>';
					rules += 'Prize money: 1000 Rs<br>';

					$('#myselect').append(rules);


    			$('#myselect').append('<div class="row" id="che_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 3 ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_3" placeholder="Optional"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');    		
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var che_event_name = $('#che_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();
    				var team_mem_3 = $('#team_mem_3').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("che_event_name", che_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("team_mem_3", team_mem_3);
					form_data.append("operation", "che_team_members_3");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});
    		}			

    		if($('#che_event_name').val() == 'chemaware'){

    			
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
    	

    				var rules = '<div class="row" id="chemaware_rules"><center><b><u>SPOTLIGHT</u></b></center><br>';
					rules += 'It is a quiz which is based on chemistry and general awareness.<br>';
					rules += '<b>Rules and regulations:-</b><br>';
					rules += '•	It will 2 round quiz – Elimination round and buzzer round.<br>';
					rules += '•	Elimination round is  paper-pen based and 8 participants selected on their<br>';
					rules += 'performance to the next round.<br>';
					rules += '•	There is no team allowed in elimination round.<br>';
					rules += '•	Buzzer round is team wise round and there is 4 teams (2 members).<br>';
					rules += '•	Team will make by coordinator of the events.<br>';
					rules += '<b>Time duration:-</b> 2 hr<br>';
					rules += '<b>Prize money:-</b> 1000rs for team<br>';

					$('#myselect').append(rules);
    

    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');
    			$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var che_event_name = $('#che_event_name').val().trim();
    				
    				

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("che_event_name", che_event_name);
					form_data.append("operation", "che_team_members_1");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});
	    	}

			if($('#che_event_name').val() == 'chem_e_car'){

				
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();


    				var rules = '<div class="row" id="chem_e_car_rules"><center><b><u>CHEM-E-CAR</u></b></center><br>';
					rules += 'Design your own Chemical powered car! Apply your theoretical knowledge<br>';
					rules += 'and the rest will be your creativity.<br>';
					rules += '<b>Rules and Regulations:-</b><br>';
					rules += '•	Max 4 members in a team.<br>';
					rules += '•	Your car may be chemical reactions or controlled explosion based.<br>';
					rules += '•	Chemical reactions that can be safely operated indoors should be used.<br>';
					rules += '•	The model should not employ any battery or any pre-manufactured source of energy.<br>';
					rules += '• The automated mechanism (i.e. trigger) can involve a chemical or<br>';
					rules += 'mechanical process but should not involve any electric/electronic components.<br>';
					rules += '•	NO participants can opt for two tracks.<br>';
					rules += '<b>Time duration:</b>  1 hr<br>';
					rules += '<b>Prize money:</b>  1500 Rs<br>';

					$('#myselect').append(rules);

	    		$('#myselect').append('<div class="row" id="che_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');	

	    		$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var che_event_name = $('#che_event_name').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("che_event_name", che_event_name);
					form_data.append("operation", "che_team_members_1");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

	    	}                         

	    	if($('#che_event_name').val() == 'aquamania'){

	    		
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
    			var rules = 
    			$('#myselect').append(rules);


    		$('#myselect').append('<div class="row" id="che_team_members" style="padding-left : 27px;"><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Your User ID* :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_1"></div></div><br><div class="row"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>Team Member 2 ID :</label></div><div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><input type="text" class="form-control" id="team_mem_2" placeholder="Optional"></div></div><br></div>');
    			$('#myselect').append('<div class="row" id="register_button" style="padding-left:30px;"><button id="register" class="btn btn-success">Register</button></div>');	

	    		$('#register').click(function(){
	    			
    				var dep = $('#event').val().trim();
    				var che_event_name = $('#che_event_name').val().trim();
    				var team_mem_1 = $('#team_mem_1').val().trim();
    				var team_mem_2 = $('#team_mem_2').val().trim();

    				var form_data = new FormData();
					form_data.append("dep", dep);
					form_data.append("che_event_name", che_event_name);
					form_data.append("team_mem_1", team_mem_1);
					form_data.append("team_mem_2", team_mem_2);
					form_data.append("operation", "che_team_members_2");

	    			$.ajax({
						type: 'post',
						url: "./ajax/eventreg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							if (data == 1) {
								
			                   alert("Registered Successfully");
							}
							else if(data == 2){
								alert("Wrong Credentials!!");
							}
							else if(data == 3){
								alert("Already Registered!!");
							}
							else if(data == 4){
								alert("Team Member Has Already Registered!!");
							}

						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});
	    		});

	    }

		});

	}
	if(event == 'main_event'){

		
		$('#jugadupreneur_rules').remove();
		$('#chemaware_rules').remove();
		$('#chem_e_car_rules').remove();
		$('#aquamania').remove();
		$('#picturesque_rules').remove();
		$('#jam_on_ham_rules').remove();
		$('#millau_vaiduct_rules').remove();
		$('#aquatown').remove();
		$('#resiwars_rules').remove();
		$('#logic_armers_rules').remove();
		$('#circuitron_rules').remove();
		$('#inertia_rules').remove();
		$('#techlocked_rules').remove();
		$('#tesla_rules').remove();
		$('#buzzwire_pinball_rules').remove();
		
		$('#avishkar_rules').remove();
		$('#transcednce_rules').remove();
		$('#ciphertech_rules').remove();
		$('#techquiz_rules').remove();
		$('#googler_rules').remove();
		$('#appdroid_rules').remove();
		$('#codathon_rules').remove();
		$('#posterolic_rules').remove();
		$('#dj_wars_rules').remove();
		$('#webdevs_rules').remove();
		$('#animatrix_rules').remove();
		$('#codearena_rules').remove();
		$('#me_team_members').remove();
		$('#ee_and_ec_team_members').remove();
		$('#cs_team_members').remove();
		$('#designing_team_members').remove();
		$('#ce_team_members').remove();
		$('#che_team_members').remove();
    			$('#main_team_members').remove();
    			$('#register_button').remove();
		$('#cs_event').remove();
		$('#ee_and_ec_event').remove();
		$('#me_event').remove();
		$('#designing_event').remove();
		$('#ce_event').remove();
		$('#che_event').remove();
		$('#myselect').append('<div class="row" id="main_event" style="padding-left:15px;"><div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><label>EVENT:</label></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><select class="form-control" id="main_event_name" style="max-width: 18em;"></select></div><br></div>');
		$('#main_event_name').append('<option value="0">--- SELECT EVENT ---</option><option value="1">--- KARTWARS ---</option><option value="podio">Podio</option><option value="control_your_cart">Control Your Cart</option><option value="park_it_up">Park It Up</option><option value="the_audi_race">The Audi Race</option><option value="faccia_a_faccia">Faccia-A-Faccia</option><option value="4">   -------   </option><option value="rc_plane">RC Plane</option><option value="2">---  ROBOTICS  ---</option><option value="manual_bot">Manual Bot</option><option value="botball">Bot Ball</option><option value="autonomous">Autonomous</option><option value="codeasm">Codeasm</option><option value="3">   ---------   </option><option value="underwater_project">Underwater Project</option><option value="blueprint">BluePrint</option><option value="tech_paper_presentation">Tech Paper Presentation</option><option value="pitching_competition">Pitching Competition</option><option value="engineering_quiz">Engineering Quiz</option><option value="aptitute_test">Aptitute Test</option>');	
	}
});
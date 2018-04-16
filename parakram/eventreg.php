<?php   
    session_start();
    if(!isset($_SESSION['fullname'])){
        header("Location: login.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Event Registeration</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  
  <style>
  #codearena_rules{
    padding-left: 30px;
  }
  #techlocked_rules{
    padding-left: 30px;
  }
  #inertia_rules{
    padding-left: 30px;
  }
  #tesla_rules{
    padding-left: 30px;
  }
  #jugadupreneur_rules{
    padding-left: 30px;
  }
  #chemaware_rules{
    padding-left: 30px;
  }
  #chem_e_car_rules{
    padding-left: 30px;
  }
  #aquamania_rules{
    padding-left: 30px;
  }
  #millau_vaiduct_rules{
    padding-left: 30px;
  }
  #aquatown_rules{
    padding-left: 30px;
  }
  #workshop_on_autocad_rules{
    padding-left: 30px;
  }

  #picturesque_rules{
    padding-left: 30px;
  }

  #jam_on_ham_rules{
    padding-left: 30px;
  }

  #resiwars_rules{
    padding-left: 30px;
  }
  #logic_armers_rules{
    padding-left: 30px;
  }
  #circuitron_rules{
    padding-left: 30px;
  }
  #buzzwire_pinball_rules{
    padding-left: 30px;
  }
  #avishkar_rules{
    padding-left: 30px;
  }
  #transcednce_rules{
    padding-left: 30px;
  }

  #webdevs_rules{
    padding-left: 30px;
  }

  #animatrix_rules{
    padding-left: 30px;
  }

  #dj_wars_rules{
    padding-left: 30px;
  }
  #posterolic_rules{
    padding-left: 30px;
  }
  #codathon_rules{
    padding-left: 30px;
  }
  #appdroid_rules{
    padding-left: 30px;
  }

  #googler_rules{
    padding-left: 30px;
  }

  #techquiz_rules{
    padding-left: 30px;
  }

  #ciphertech_rules{
    padding-left: 30px;
  }

    #cs_team_members{
      margin-top: 20px;
    }    

    #ee_and_ec_team_members{
      margin-top: 20px;
    }

    

    #me_team_members{
      margin-top: 20px;
    }

    #ce_team_members{
      margin-top: 20px;
    }

    #che_team_members{
      margin-top: 20px;
    }

    #main_team_members{
      margin-top: 20px;
    }

    #main_event{
      margin-top: 20px;
    }
    #che_event{
      margin-top: 20px;
    }

    #ee_and_ec_event{
      margin-top:20px;
    }

    #ce_event{
      margin-top:20px;
    }
    #me_event{
      margin-top:20px;
    }

    

    #cs_event{
      margin-top:20px;
    }
    .text{
      padding-top: 15px;
    }
    .header{
      padding-left: 20px;
      padding-top: 20px;
      background-color:   #EDF0F1;
      height: 150px;
    }
    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */
    .row.content {height: 1500px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      background-color: #2F4F4F;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height: auto;} 
    }
  </style>
</head>
<body>

<div class="container-fluid">
  <div class="row content">
      <?php include "sidenav.php"; ?>
      <div class="col-sm-9" id="dashboard">
        <div class="row header">
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">

            <img src="images/Parakramlogo.png" class="img-rounded" alt="Parakram Logo" style="width:100%">

          </div>
          <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 text">
            <h1>PARAKRAM Dashboard</h1>
          </div>
        </div>
        <br>
        <div class="row" id="myselect">
          <div class="row" id="department" style="padding-left:15px;">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <label>DEPARTMENT :</label>
            </div>
            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <select class="form-control" id="event" style="max-width: 18em;">
                <option value="0">--- SELECT DEPARTMENT ---</option>
                <option value="cs">Alpha Zero (Computer Science)</option>
                <option value="ee_and_ec">Yantrika (Electrical And Eletronics)</option>
                <option value="che">Rasayinika (Chemical)</option>
                <option value="me">Newtonian (Mechanical)</option>
                <option value="ce">Megalith (Civil)</option>
                <option value="mba">Think Tank (MBA)</option>
                <option value="designing">Pitchers (Designing)</option>
                <!--option value="robotics">Mechatron (Robotics)</option-->
              </select>
            </div>
          </div>
        </div>


       
      </div>
  </div>
</div>

<footer class="container-fluid">
  <p>Footer Text</p>
</footer>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="js\eventreg.js?ver=3.6"></script>
<script src="js\sidenav.js"></script>

</html>

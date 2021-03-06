<?php
$url = "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'] . "templates/main-viewer/";
?>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

    <!-- Date Time Picker -->
    <link rel="stylesheet" href="<?php echo $url?>/modules/external/datetimepicker/css/bootstrap-datetimepicker.min.css" media="screen">

    <!-- Calendar View -->
    <link rel="stylesheet" href="<?php echo $url?>/interfaces/fullcalendar/fullcalendar.min.css">
    <link rel="stylesheet" href="<?php echo $url?>/interfaces/fullcalendar/fullcalendar.print.css" media="print">
    <script src="<?php echo $url?>/interfaces/fullcalendar/lib/moment.min.js"></script>
    <script src="<?php echo $url?>/interfaces/fullcalendar/gcal.css"></script>
    <script src="<?php echo $url?>/interfaces/fullcalendar/fullcalendar.min.js"></script>

    <style>
      body {
        padding:10px;
      }
      .div-table {
        display:table;
      }
      .div-row {
        display:table-row;
        height:18px;
      }
      .div-cell {
        cursor: default;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display:table-cell;
        vertical-align:middle;
        width:72px;
        height:18px;
        border:1px solid black;
        padding-left:5px;
      }
      .div-clickable {
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="container" ng-controller="AppCtrl">
    </div>
    <!-- todo: add other modules here -->

    <!-- preferences manager -->
    <script src="<?php echo $url?>/modules/preferencemanager/preferences.js"></script>

    <!-- book manager -->

    <!-- controller module -->
    <script src="<?php echo $url?>/modules/controller/display.js"></script>
    <script src="<?php echo $url?>/modules/controller/calendar.js"></script>
    <script src="<?php echo $url?>/modules/controller/controller.js"></script>

  </body>
</html>

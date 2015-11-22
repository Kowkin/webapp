<!DOCTYPE html>
<html lang="ru" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <!-- Bootstrap -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/toaster.css" rel="stylesheet">
</head>
<body ng-cloak="">

 <div >
      <div class="container" style="margin-top:20px;">

        <div data-ng-view="" id="ng-view" class="slide-animation"></div>

      </div>
    </body>
  <toaster-container toaster-options="{'time-out': 3000}"></toaster-container>


<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/bootstrap.min.js"></script>

<script src="js/angular/angular.min.js"></script>
<script src="js/angular/angular-route.min.js"></script>
<script src="js/angular/angular-animate.min.js"></script>

<script src="js/app/controllers.js"></script>

<script src="js/toaster.js"></script>
<script src="js/app/data.js"></script>
<script src="js/app/directives.js"></script>

</body>
</html>
angular.module('homeCtrl', [])

.controller('homeController', function(){
  var vm = this;

  vm.message = "I am the main home page message as instatiated by the mainController.";

  vm.percent = parseInt(new Date() % 100);

});

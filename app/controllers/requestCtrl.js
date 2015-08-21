angular.module('requestCtrl', [])
  .controller('requestController', function(Request, $location){
    var vm = this;

    Request.all().success(function(data){
      console.log(data);
      if(data['total_count'] > 0){
        vm.requests = data["response"];
      } else {
        vm.error = "There are currently no entries. Try adding some!";
      }

      vm.processing = false;
    });

    vm.processing = true;
    vm.message = "";

    vm.createRequest = function(requestData){
      Request.create(requestData).success(function(data){
        vm.message = "Request has been sent";
        $location.path('/requests');
      });
    };

  })

  .controller('requestEditController', function(Request){

  })

  .controller('requestViewController', function(Request){

  })

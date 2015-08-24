angular.module('requestService', [])

.factory('Request', function($http, CalculateSig){
  var requestFactory = {},
    URL = "http://jackson.sjfc.edu/forms-test/gravityformsapi/",
    form_id = 38,
    route = "forms/" + form_id + "/entries";

  //get a single user
	requestFactory.get = function(id){
		return $http.get(URL + "forms/" + id + "/entries?" + CalculateSig.getURL);
	};

	//get all users
	requestFactory.all = function(){
    var expires = parseInt(new Date().getTime() / 1000) + 3600;

		return $http.get(URL + route + "?api_key=809cbb8609&signature=" +
            CalculateSig.getURL("GET", route, expires) + "&expires=" + expires);
	};

	return requestFactory;
})

// For private use only
// ===========================
.factory('CalculateSig', function(){
  var date = new Date(),
    publicKey = "809cbb8609",
    privateKey = "f90cb522f598212";

  var CalculateSig = {};

  CalculateSig.getURL = function(method, route, expires){
    var hash = CryptoJS.HmacSHA1( publicKey + ":" + method + ":" + route + ":" + expires, privateKey );
    var base64 = hash.toString(CryptoJS.enc.Base64);
    return encodeURIComponent(base64);
  };

  return CalculateSig;
})

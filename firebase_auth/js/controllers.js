(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.controller('FirebaseCtrl', fbCtrl );

	function fbCtrl(firebaseFactory, $firebaseArray, $timeout){
		var vm = this;
		vm.t = {};
		vm.t.EMAIL = false;
		vm.t.PWD = false;
        vm.successfulRegistration = false;

		vm.addUser = addUser;
        vm.removeUser = removeUser;

		function addUser(userData){
			firebaseFactory.addUser(userData, function(err,user) {
				if(err != null){
                    console.log('error',err,user);
				} else {
                    $timeout(function(){
                        vm.successfulRegistration = true;
                    });
                    console.log('success');
                }
			});
		}

        function removeUser(){

            var users = { user : [
                            { email : "a@abc.com" },
                            { email : "aa@abc.com" },
                            { email : "aab@abc.com" },
                            { email : "aabaa@abc.com" },
                            { email : "b@b.com" },
                            { email : "bb@b.com" },
                            { email : "bbb@b.com" },
                            { email : "bbbb@b.com" },
                            { email : "c@c.com" },
                            { email : "d@d.com" },
                            { email : "e@e.com" },
                            { email : "ee@e.com" },
                            { email : "ff@f.com" },
                            { email : "fff@abcd.com" },
                            { email : "g@g.com" },
                            { email : "gg@g.com" },
                            { email : "ggg@g.com" },
                            { email : "h@h.com" }
                ] };

            for(var i=0; i < users.user.length; i++){
                firebaseFactory.removeUser(users.user[i].email);
            }
        }
	};
})();

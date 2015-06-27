var myFirebase = 'https://boiling-fire-3340.firebaseio.com/thoughts/';

(function() {
	'use strict';

	angular
		.module('FirebaseApp',['firebase']);

})();

function convertFbToMl(fb){
	var obj = {};
	for(var key in fb){
		obj[fb[key].idx] = {'fbIdx':key,'title':fb[key].title};
	}
	return obj;
};

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .
//= require angular
//= require angular-resource

angular.module('Twitter', ['ngResource']);

function twitterSearch(result) {
	alert('this is ok');
}

function TwitterCtrl($scope, $resource) {
	$scope.twitter = $resource('http://search.twitter.com/:action',{
		action:'search.json',
		q:'angularjs',
		callback:'JSON_CALLBACK'
	},
	{
		get: {method:'JSONP'}
	});
	$scope.doSearch = function () {
    $scope.twitterResult = $scope.twitter.get({
    	q:$scope.searchTerm
    });
	}
}

(function(){
  /* Your javascripts goes here... */
});
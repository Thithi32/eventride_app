angular.module('app.factories', [])
    .factory('Events', function($firebaseArray){
        var eventsRef = new Firebase('https://eventride.firebaseio.com/events');
        return $firebaseArray(eventsRef);
    })

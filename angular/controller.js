var app=angular.module('myApp',['ui.router']);
app.config(['$stateProvider','$urlProvider',function($stateProvider,$urlRouteProvider){
    $urlRouteProvider.otherwise('/');
    $stateProvider
    .state('home',{
        url:"/",
        views:{
            'header':{
                templateUrl: 'header.html'
            },
            'content':{
                templateUrl: 'home.html'
            },
            'footer':{
                templateUrl: 'footer.html'
            }
            
        }
    })
    .state('blog',{
        url:"/blog",
        views:{
            'content@':{
                templateUrl:'blog.html',
                controller:'blogController'
            }
        }
    })
    .state(''
    )
}]);
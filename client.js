console.log('js loaded');

let foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function(){
    let self = this;

    self.foods = [
        {name: 'taco'},
        {name: 'potato'}
    ];
});
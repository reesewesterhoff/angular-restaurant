console.log('js loaded');

let foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function(){
    let self = this;

    self.foods = [
        {name: 'taco'},
        {name: 'potato'}
    ];
    self.foodToAdd = '';

    self.addFood = function(newFood) {
        console.log('in addFood');
        self.foods.push({name: newFood});
        self.foodToAdd = '';
    }
});
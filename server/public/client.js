console.log('js loaded');

let foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function () {
    let self = this;

    self.foods = [
        { name: 'taco' },
        { name: 'potato' }
    ];
    self.foodToAdd = {};

    self.addFood = function (newFood) {
        console.log('in addFood');
        // only push if rating is between 1-100
        if (newFood.deliciousness <= 100 && newFood.deliciousness >= 1) {
            self.foods.push(newFood);
            self.foodToAdd = {};
        }
        else{
            alert('Please enter a deliciousness rating between 1 and 100');
        }
    }
});
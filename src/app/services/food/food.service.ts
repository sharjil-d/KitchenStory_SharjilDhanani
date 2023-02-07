import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/modals/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
getFoodById(id:number):Foods{
  return this.getAll().find(food => food.id==id)!;
}
  constructor() { }
  getAll():Foods[]{
    return[
      {
        id:1,
        name: 'Burger',
        cookTime:'20-30',
        price:5,
        favorite: false,
        origins: ['Indian','Chinese'],
        star:4.5,
        imageUrl:'/assets/img1.jpg',
        tags:['fastfood','pizza'],
      },
      {
        id:2,
        name: 'Indian pizza',
        cookTime:'10-20',
        price:15,
        favorite: false,
        origins: ['Indian'],
        star:4.5,
        imageUrl:'/assets/img2.jpg',
        tags:['fastfood','pizza'],

      },
      {
        id:3,
        name: 'Italian pizza',
        cookTime:'20-30',
        price:20,
        favorite: false,
        origins: ['italy'],
        star:4.5,
        imageUrl:'/assets/img3.jpg',
        tags:['fastfood','pizza'],
      },
      {
        id:4,
        name: 'American pizza',
        cookTime:'15-25',
        price:10,
        favorite: false,
        origins: ['America'],
        star:4.5,
        imageUrl:'/assets/img4.jpg',
        tags:['fastfood','pizza'],
      }
      
      
      
    ]
  }
}

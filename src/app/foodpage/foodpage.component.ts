import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/modals/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService,private cartService:CartService,
    private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodService.getFoodById(params['id'])
    }


    )
  }
  
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addToCart(){
    this.cartService.addtoCart(this.food);
    this.router.navigateByUrl('/cartpage')
  }
}

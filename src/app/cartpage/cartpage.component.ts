import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/modals/cart';
import { CartItem } from '../shared/modals/cartItem';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService){
   
    this.setCart();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  setCart(){
      this.cart=this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    alert(
      'product has been removed from cart'
    )
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  OnClickalert(){
    alert('Payment is successful');
  }

}

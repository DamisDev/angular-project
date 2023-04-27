import { Component } from '@angular/core';
import {Ingredinet} from "../shared/ingredinet.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredinet[] = [
    new Ingredinet('Apples', 5),
    new Ingredinet('Tomato', 10),
  ];
  constructor() {
  }
}

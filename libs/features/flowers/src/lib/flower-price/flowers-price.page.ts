import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Flower } from '../models/flower.interface';
import { DataService } from '../services/data.service';


@Component({
  selector: 'flower-shop-price',
  templateUrl: './flowers.price.page.html',
  styleUrls: ['./flowers-price.page.scss'],
})
export class FlowersPriceComponent implements OnInit {

  roses:any = [];

  flowerId = '';

  price$: Observable<number> | undefined;

  constructor(private _router$$: Router,
              private _flowerService: DataService) {}

  ngOnInit() 
  {
    
    this.flowerId = this._router$$.url.split('/')[2];
    if(this.flowerId)
    {
      this.price$ = this._flowerService.getFlowerById(this.flowerId)
                            .pipe(map(f => (f as Flower).price));
    }
   

  }
 
}

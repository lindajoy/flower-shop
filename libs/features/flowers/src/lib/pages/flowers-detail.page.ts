import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'flower-shop-details-page',
  templateUrl: './flowers.detail.page.html',
  styleUrls: ['./flowers-detail.page.scss'],
})
export class FlowersDetailsComponent implements OnInit {

  roses:any = [];

  flowerId = '';

  flower:any;

  constructor(private _router$$: Router,
              private _flowerService: DataService) {}

  ngOnInit() 
  {
    this.flowerId = this._router$$.url.split('/')[2];

    if(this.flowerId)
    {
      this._flowerService.getFlowerById(this.flowerId).subscribe(flower => {
          this.flower = flower;
          console.log(this.flower)
        });
    }
   

  }
 
}

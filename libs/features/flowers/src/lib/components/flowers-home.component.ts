import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'flower-shop-home-page',
  templateUrl: './flowers-home.component.html',
  styleUrls: ['./flowers-home.component.scss'],
})
export class FlowersHomeComponent implements OnInit {

  flowers:any = [];
  constructor(private _router$$: Router,
              private _flowerService: DataService) {}

  ngOnInit() 
  {
    this.showMeFlowers();
  }

  showMeFlowers()
  {
    return this._flowerService.getFlowers().subscribe(flowers =>{ this.flowers = flowers})
  }

  goToDetail(flowerId: string) 
  {
    this._router$$.navigate(['flowers', flowerId]);
  }
}

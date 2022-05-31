import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersHomeComponent } from './components/flowers-home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlowersDetailsComponent } from './pages/flowers-detail.page';
import { FlowersPriceComponent } from './flower-price/flowers-price.page';


const routes: Routes = [
  {
    path: '',
    component: FlowersHomeComponent
  },
  {
    path: ':id',
    component: FlowersDetailsComponent
  }
]
@NgModule({
  imports: [CommonModule,  MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ FlowersHomeComponent, FlowersDetailsComponent, FlowersPriceComponent ],
})
export class FeaturesFlowersModule {}

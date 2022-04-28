import { NgModule } from '@angular/core';
import {  Route, Routes, RouterModule, PreloadAllModules }    from '@angular/router';

export const BASE_ROUTES: Routes = [
  { path: '', redirectTo:'flowers'},
  { path: 'flowers',  loadChildren:() => import('libs/features/flowers/src/lib/features-flowers.module').then(m => m.FeaturesFlowersModule)}
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        BASE_ROUTES,
        {
          enableTracing: true,
          preloadingStrategy: PreloadAllModules
        }
      )
    ],
    exports: [
      RouterModule
    ] 
})

export class AppRoutingModule { }



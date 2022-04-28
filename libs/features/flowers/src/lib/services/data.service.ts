import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

/** Reference: https://github.com/angular/angularfire/blob/master/docs/firestore/collections.md */

/** Shared State
 *  State that is being shared throughout different smart components. 
 *  This means that the instance of this piece of state should live on a higher level, than the components that want to consume it.
 */

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store: AngularFirestore) 
   {}

   //gets all the flowers

   public getFlowers()
   {
     return this.store.collection('categories').valueChanges();
   }

   //gets the flower by ID
   public getFlowerById(flowerId: string) {
     return this.store.collection('categories').doc(flowerId).valueChanges();
   }
  
   //queries the collection and returns the result
   public getFlowerPricesBelowTenEuros(quantity:number)
   {
     return this.store.collectionGroup('categories', ref => ref.where('quantity','==', quantity)).valueChanges();
   }
}


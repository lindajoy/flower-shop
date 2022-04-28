import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store: AngularFirestore) 
   {}

   public getFlowers()
   {
     return this.store.collection('categories').valueChanges();
   }

   public getFlowerById(flowerId: string) {
     return this.store.collection('categories').doc(flowerId).valueChanges();
   }
}

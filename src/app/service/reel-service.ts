import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, documentId, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Reel } from '../models/reel';

@Injectable({
  providedIn: 'root',
})
export class ReelService {

  constructor(private firestore: Firestore) {}

  getReels(): Observable<Reel[]> {
    const reelsRef = collection(this.firestore, 'reels');
    return collectionData(reelsRef, {idField: 'id'}) as Observable<any[]>;
  }

  addReel(reel: any){
    const reelsRef = collection(this.firestore, 'reels');
    return addDoc(reelsRef, reel);
  }

  modifyReel(id: string, reelData: any){
    const docRef = doc(this.firestore, `reels/${id}`);
    return updateDoc(docRef, reelData);
  }

  deleteReel(id: number){
    const docRef = doc(this.firestore, `reels/${id}`);
    return deleteDoc(docRef);
  }
}

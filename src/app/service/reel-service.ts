import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, limit, orderBy, query, startAfter, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Reel } from '../models/reel';

@Injectable({
  providedIn: 'root',
})
export class ReelService {

  constructor(private firestore: Firestore) {}

  getReelsFirstPage(limitCount: number) {
    const reelsRef = collection(this.firestore, 'reels');
    const q = query(reelsRef, orderBy('createdAt', 'desc'), limit(limitCount));
    return getDocs(q);
  }

  getReelsNextPage(lastDoc: any, limitCount: number) {
    const reelsRef = collection(this.firestore, 'reels');
    if (!lastDoc) {
      return this.getReelsFirstPage(limitCount);
    }
    const q = query(reelsRef, orderBy('createdAt', 'desc'), startAfter(lastDoc), limit(limitCount));
    return getDocs(q);
  }

  addReel(reel: any){
    reel.createdAt = new Date();
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

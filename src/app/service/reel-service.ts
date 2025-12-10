import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, limit, orderBy, query, startAfter, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Reel } from '../models/reel';

@Injectable({
  providedIn: 'root',
})
export class ReelService {

  constructor(private firestore: Firestore) {}

  getReelsFirstPage(limitCount: number, status: string) {
    const reelsRef = collection(this.firestore, 'reels');
    const constraints = [
      ...(status !== 'All' ? [where('status', '==', status)] : []),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    ];
    const q = query(reelsRef, ...constraints);
    return getDocs(q);
  }

  getReelsNextPage(lastDoc: any, limitCount: number, status: string) {
    const reelsRef = collection(this.firestore, 'reels');
    if (!lastDoc) {
      return this.getReelsFirstPage(limitCount, status);
    }
    const constraints = [
      ...(status !== 'All' ? [where('status', '==', status)] : []),
      orderBy('createdAt', 'desc'),
      startAfter(lastDoc),
      limit(limitCount)
    ];
    const q = query(reelsRef, ...constraints);
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

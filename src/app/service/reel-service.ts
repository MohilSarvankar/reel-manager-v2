import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, documentId, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReelService {

  constructor(private firestore: Firestore) {}

  list = [
    { id: 1, movie: 'Inception', scene: 'Dream within a dream', category: 'Sci-Fi', status: 'Uploaded' },
    { id: 2, movie: 'The Dark Knight', scene: 'Joker\'s bank heist', category: 'Action', status: 'Created' },
    { id: 3, movie: 'Interstellar', scene: 'Docking sequence', category: 'Sci-Fi', status: 'Idea' }
  ];

  getReels(): Observable<any[]> {
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

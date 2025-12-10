import { Component } from '@angular/core';
import { ReelBox } from '../reel-box/reel-box';
import { ReelService } from '../service/reel-service';
import { Reel } from '../models/reel';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-reel-list',
  imports: [ReelBox, ScrollingModule],
  templateUrl: './reel-list.html',
  styleUrl: './reel-list.css',
})
export class ReelList {
  
  constructor(private reelService:ReelService){}

  reelList: Reel[] = [];
  pageSize: number = 5;
  isLoading: boolean = false;
  noReels: boolean = false;
  lastDoc: any = null;
  currentStatus: string = 'All';

  ngOnInit(){
    this.loadReels();
  }

  loadReels(){
    this.isLoading = true;
    this.reelService.getReelsFirstPage(this.pageSize, this.currentStatus)
    .then((querySnapshot) => {
      this.reelList = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        } as Reel;
      });
      this.noReels = this.reelList.length === 0;
      this.isLoading = false;
      this.lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    })
    .catch((error) => {
      console.error('Error fetching reels: ', error);
    });
  }

  loadMoreReels(){
    this.isLoading = true;
    this.reelService.getReelsNextPage(this.lastDoc, this.pageSize, this.currentStatus)
    .then((querySnapshot) => {
      const newReels = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        } as Reel;
      });
      this.reelList.push(...newReels);
      this.lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      this.isLoading = false;
    })
    .catch((error) => {
      console.error('Error fetching more reels: ', error);
    });
  }

  onScroll(event: any){
    if(event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight < 1 && !this.isLoading && this.lastDoc){
      this.loadMoreReels();
    }
  }

  statusChangeHandle(event: Event){
    const status = (event.target as HTMLInputElement).value;
    this.currentStatus = status;
    this.loadReels();
  }
}

import { Component } from '@angular/core';
import { ReelBox } from '../reel-box/reel-box';
import { ReelService } from '../service/reel-service';

@Component({
  selector: 'app-reel-list',
  imports: [ReelBox],
  templateUrl: './reel-list.html',
  styleUrl: './reel-list.css',
})
export class ReelList {
  
  constructor(private reelService:ReelService){}

  reelList:any[] = [];

  ngOnInit(){
    this.reelService.getReels().subscribe({
      next: (data:any[]) => {
        this.reelList = data;
      },
      error: (error) => {
        console.error('Error fetching reels: ', error);
      }
    });
  }
}

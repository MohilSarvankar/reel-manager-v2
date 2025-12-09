import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reel-box',
  imports: [],
  templateUrl: './reel-box.html',
  styleUrl: './reel-box.css',
})
export class ReelBox {
  @Input() reel : any = {};

  constructor(private router: Router){}

  handleClick(){
    this.router.navigate(['/reel', this.reel.id], {queryParams: {
      movie: this.reel.movie,
      category: this.reel.category,
      scene: this.reel.scene,
      status: this.reel.status
    }});
  }
}

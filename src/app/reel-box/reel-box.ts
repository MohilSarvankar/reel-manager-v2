import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Reel } from '../models/reel';

@Component({
  selector: 'app-reel-box',
  imports: [],
  templateUrl: './reel-box.html',
  styleUrl: './reel-box.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReelBox {
  @Input() reel : Reel = null as any;

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

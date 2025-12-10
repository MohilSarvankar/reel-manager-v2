import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReelService } from '../service/reel-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reel-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reel-form.html',
  styleUrl: './reel-form.css',
})
export class ReelForm {

  constructor(
    private reelService: ReelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  reelForm = new FormGroup({
    movie: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    scene: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  reelId: any = null;
  disableButtons: boolean = false;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.reelId = params.get('id');
      
      if (this.reelId) {
        this.route.queryParams.subscribe(queryParams => {
  
          this.reelForm.setValue({
            movie: queryParams['movie'] || '',
            category: queryParams['category'] || '',
            scene: queryParams['scene'] || '',
            status: queryParams['status'] || ''
          });

        });
      }

    });
  }

  handleSubmit() {
    this.disableButtons = true;
    if (this.reelId) {
      this.reelService.modifyReel(this.reelId, this.reelForm.value)
        .then(() => {
          console.log('Reel modified');
          this.reelForm.reset();
          this.router.navigate(['/']);
        })
        .catch((error) => {
          console.error('Error modifying reel: ', error);
        });
    }
    else {
      this.reelService.addReel(this.reelForm.value)
        .then(() => {
          console.log('Reel added');
          this.reelForm.reset();
          this.router.navigate(['/']);
        })
        .catch((error) => {
          console.error('Error adding reel: ', error);
        });
    }
  }

  handleDelete() {
    this.disableButtons = true;
    this.reelService.deleteReel(this.reelId)
      .then(() => {
        console.log('Reel deleted');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Error deleting reel: ', error);
      });
  }

}

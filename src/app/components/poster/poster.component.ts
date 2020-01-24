import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  closePoster() {
    this.modalCtrl.dismiss();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Credits } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { CastInfoComponent } from '../cast-info/cast-info.component';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent implements OnInit {

  @Input() credits: Credits;
  slideOptsReparto = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };
  selectedSegment = 'cast';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  async castInfo(id: number) {
    const modal = await this.modalCtrl.create({
      component: CastInfoComponent,
      cssClass: 'cast-modal',
      componentProps: { 'castId': id }
    });
    modal.present();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CastDetail } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cast-info',
  templateUrl: './cast-info.component.html',
  styleUrls: ['./cast-info.component.scss'],
})
export class CastInfoComponent implements OnInit {

  @Input() castId: number;
  castDetail: CastDetail = {};
  hidden = 150;

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) {}

  async ngOnInit() {
    this.castDetail = await this.moviesService.getCastDetail(this.castId);
    console.log(this.castDetail);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}

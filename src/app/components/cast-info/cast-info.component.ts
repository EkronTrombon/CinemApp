import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CastDetail } from '../../interfaces/interfaces';
import { ModalController, IonContent } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-cast-info',
  templateUrl: './cast-info.component.html',
  styleUrls: ['./cast-info.component.scss'],
})
export class CastInfoComponent implements OnInit {

  private observer: IntersectionObserver;
  @ViewChild('triggerElement', { read: ElementRef, static: true }) triggerElement: ElementRef;
  @ViewChild(IonContent, { read: ElementRef, static: true }) ionContent: ElementRef;

  @Input() castId: number;
  castDetail: CastDetail = {};
  hidden = 150;

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController,
              private renderer: Renderer2,
              private iab: InAppBrowser) {}

  async ngOnInit() {
    this.observerFunction();
    this.castDetail = await this.moviesService.getCastDetail(this.castId);
  }

  observerFunction() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.ionContent.nativeElement, 'no-transform');
        } else {
          this.renderer.removeClass(this.ionContent.nativeElement, 'no-transform');
        }
      });
    });
    this.observer.observe(this.triggerElement.nativeElement);
  }

  linkWeb(homepage: string) {
    this.iab.create(homepage);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}

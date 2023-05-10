import { Component, OnInit } from '@angular/core';
import { CardEmission } from 'src/app/modeles/card_emission.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardEmission!: CardEmission[];
  constructor() {}

  ngOnInit(): void {
    this.cardEmission = [
      {
        id: 1,
        title: 'Le Jardin d\'Eden',
        img: 'https://webtv.esmcgie.com/assets/image/jardin.webp',
      },
      {
        id: 2,
        title: 'Arche De Noé',
        img: 'https://webtv.esmcgie.com/assets/image/arch.webp',
      },
      {
        id: 3,
        title: 'Royaume des Cieux et de la Terre',
        img: 'https://webtv.esmcgie.com/assets/image/rct.webp',
      },
      {
        id: 4,
        title: 'Le Bâton de Moïse',
        img: 'https://webtv.esmcgie.com/assets/image/b.webp',
      },
      {
        id: 5,
        title: 'Le Christ',
        img: 'https://webtv.esmcgie.com/assets/image/christ.webp',
      },
      {
        id: 6,
        title: 'Sceau des Prophetes',
        img: 'https://webtv.esmcgie.com/assets/image/sceau.webp',
      },
      {
        id: 7,
        title: 'Mashia Messie Mahdi',
        img: 'https://webtv.esmcgie.com/assets/image/3m.webp',
      },
      {
        id: 8,
        title: 'Jour de la Religion',
        img: 'https://webtv.esmcgie.com/assets/image/jourreligion.webp',
      },
      {
        id: 9,
        title: 'Jour dernier',
        img: 'https://webtv.esmcgie.com/assets/image/jourdernier.webp',
      },
      {
        id: 10,
        title: 'Resurection',
        img: 'https://webtv.esmcgie.com/assets/image/resurection.webp',
      },
      {
        id: 11,
        title: 'Paradis',
        img: 'https://webtv.esmcgie.com/assets/image/paradis.webp',
      },
    ];
  }
}

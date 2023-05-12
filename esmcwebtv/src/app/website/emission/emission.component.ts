import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emission',
  templateUrl: './emission.component.html',
  styleUrls: ['./emission.component.scss'],
})
export class EmissionComponent implements OnInit {
  programmes: any[] = [
    {
      title: "Le Jardin d'Eden",
      thumbnail: './assets/image/jardin.png',
    },
    {
      title: 'Arche de Noé',
      thumbnail: './assets/image/arch.png',
    },
    {
      title: 'Royaume des Cieux et de la Terre',
      thumbnail: './assets/image/r.png',
    },
    {
      title: 'Le Bâton de Moïse',
      thumbnail: './assets/image/baton.png',
    },
    {
      title: 'Le Christ',
      thumbnail: './assets/image/christ.png',
    },
    {
      title: 'Sceau des Prophetes',
      thumbnail: './assets/image/sceau.png',
    },
    {
      title: 'Mashia Messie Mahdi',
      thumbnail: './assets/image/3m.png',
    },
    {
      title: 'Jour de la Religion',
      thumbnail: './assets/image/jourreligion.png',
    },
    {
      title: 'Jour dernier',
      thumbnail: './assets/image/jourdernier2.jpg',
    },
    {
      title: 'Resurection',
      thumbnail: './assets/image/resurrection.png',
    },
    {
      thumbnail: '../../assets/image/paradis.png',
      title: 'Le Paradis',
    },

    // Ajoutez d'autres Émissions ici...
  ];

  ngOnInit(): void {}
}

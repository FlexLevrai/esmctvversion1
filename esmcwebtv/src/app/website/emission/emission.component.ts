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
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      title: 'Arche de Noé',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      title: 'Royaume des Cieux et de la Terre',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      title: 'Le Bâton de Moïse',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      title: 'Le Christ',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      title: 'Sceau des Prophetes',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      title: 'Mashia Messie Mahdi',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      title: 'Jour de la Religion',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      title: 'Jour dernier',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      title: 'Resurection',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
    },
    {
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
      title: 'Le Paradis',
    },

    // Ajoutez d'autres Émissions ici...
  ];

  ngOnInit(): void {}
}

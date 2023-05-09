import { Component, OnInit } from '@angular/core';
import { CardEmission } from '../../modeles/card_emission.model';

@Component({
  selector: 'app-emission',
  templateUrl: './emission.component.html',
  styleUrls: ['./emission.component.scss'],
})
export class EmissionComponent implements OnInit {
  programmes: any[] = [
    {
      title: 'Émission 1',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      title: 'Émission 2',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      title: 'Émission 3',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      title: 'Émission 4',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      title: 'Émission 5',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      title: 'Émission 6',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      title: 'Émission 7',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      title: 'Émission 8',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      title: 'Émission 9',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      title: 'Émission 10',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60'
    },
    {
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664875849504-9a85b393d572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=280&q=60',
      title: 'Émission 11'
    },

    // Ajoutez d'autres Émissions ici...
  ];

  ngOnInit(): void {
  }
}

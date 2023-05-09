import { Component, OnInit } from '@angular/core';
import { CardEmission } from '../../modeles/card_emission.model';

@Component({
  selector: 'app-emission',
  templateUrl: './emission.component.html',
  styleUrls: ['./emission.component.scss'],
})
export class EmissionComponent implements OnInit {
  cardEmission!: CardEmission[];
  constructor() {}

  ngOnInit(): void {
    this.cardEmission = [
      {
        id: 1,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 5,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 6,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 7,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 8,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 9,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 10,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 11,
        title: 'Lorem ipsum dolor, sit amet consectetur',
        img: 'https://plus.unsplash.com/premium_photo-1678170398101-237845e645ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
    ];
  }
}

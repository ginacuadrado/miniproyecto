import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/InfoPoke/Pokemon';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

@Input() pokemon: Pokemon;
 
  constructor() { }

  ngOnInit() {
  }

}

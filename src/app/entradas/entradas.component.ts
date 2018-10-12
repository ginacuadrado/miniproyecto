import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../InfoPoke/Pokemon';
import { Router } from '@angular/router';

import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.scss']
})
export class EntradasComponent implements OnInit {

  pokemon = [];

  constructor(private ss: ServicioService) { }

  ngOnInit() {
      this.ss.getJSON().subscribe(data => this.pokemon = data);
      };
  }

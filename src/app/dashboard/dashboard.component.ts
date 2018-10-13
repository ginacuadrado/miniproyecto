import { Component, OnInit} from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Pokemon } from '../InfoPoke/Pokemon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})

export class DashboardComponent implements OnInit {

  public pokemon = [];

  title="◈ Pokédex ◈";

  constructor(private ss: ServicioService) { }

  ngOnInit() {
   
    this.ss.getJSON().subscribe(data => this.pokemon = data);
    };
  }

  

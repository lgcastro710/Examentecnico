import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.scss']
})
export class ValidacionComponent implements OnInit {
  activateRuc = false;
  activateDatos = false;
  constructor() { }

  ngOnInit() {
  }


  toggleRuc() {
    this.activateRuc = !this.activateRuc;
  }

  openDatos() {
    this.activateDatos = !this.activateDatos;
  }
}

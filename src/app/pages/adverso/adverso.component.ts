import { Component, OnInit } from '@angular/core';
import { Adverso } from 'src/app/models/adverso.model';

@Component({
  selector: 'app-adverso',
  templateUrl: './adverso.component.html',
  styleUrls: ['./adverso.component.css']
})
export class AdversoComponent implements OnInit {

  model = new Adverso();
  
  constructor() { }

  ngOnInit() {
  }

  enviar() {
    console.log(this.model);
  }

}

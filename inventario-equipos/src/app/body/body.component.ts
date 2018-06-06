import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  lista:string[]=["hola","que","tal","estas","sergio","talvez","fanny","ya","ni","te","quiere","y","tu","sigues","con","tus","pendejadas"]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit {
  /*
   constructor (private GitSearchService : GitSearchService) {

    es lo mismo que crear una variable en local y asignarle el valor que se recibe
    yo lo voy a hacer de forma tradicional. Creo la variable y la asigno

  */
  private gitSearchLocal : GitSearchService;
  constructor ( GitSS : GitSearchService) {
    this.gitSearchLocal = GitSS;
  }

  ngOnInit() {
    
  /*   // Buscamos el número de repositorios que lleven la palabra "angular"
    this.gitSearchLocal.gitSearch('angular').then( (response) => {
      alert("Total Libraries Found:" + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);
    })

    //Buscamos el número de repositorios que lleven el usuario fdgongora2
    this.gitSearchLocal.gitSearchUser('gongora').then((response) => {
      alert("Total de usuarios llamados gongora : "+response.total_count)
    },
    (error)=>{
      alert("Error: " + error.statusText);
    }) */
  }

  title = 'app is functional!';
}
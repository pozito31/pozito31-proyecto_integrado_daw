import { Component, OnInit } from '@angular/core';
import { UnifiedSearchService } from '../unified-search.service'
import { GitSearch } from '../git-search'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { AdvancedSearchModel } from '../advanced-search-model'
@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;
  title: string;
  pagina: number;  
  constructor(private UnifiedSearchService: UnifiedSearchService, private route: ActivatedRoute, private router: Router ) { }
  model = new AdvancedSearchModel('', '', '', null, null, '');
  modelKeys = Object.keys(this.model);
  tiposCampoFormulario: Array<any> = [];
  ngOnInit() {
    this.modelKeys.forEach((key) => {      
      if (typeof (this.model[key]) === 'string'){
        this.tiposCampoFormulario.push('text');
      } else 
        this.tiposCampoFormulario.push('number');    
    });
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.pagina = +params.get('page');
      if (this.pagina == 0)
      {
        this.pagina=1;
      }
      this.gitSearch();        
    })
    this.route.data.subscribe( (result) => {
      this.title = result.title
    });
  }

  gitSearch = () => {
    this.UnifiedSearchService.unifiedSearch(this.searchQuery).subscribe( (response) => {
      console.log(response);
      this.searchResults = response.repositories;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  sendQuery = () => {
    this.pagina=1;  
    this.searchResults = null;
    let search : string = this.model.q;
    let params : string = "";
    this.modelKeys.forEach(  (elem) => {
        if (elem === 'q') {
            return false;
        }
        if (this.model[elem]) {
            params += '+' + elem + ':' + this.model[elem];
        }
    })
    this.searchQuery = search;
    if (params !== '') {
        this.searchQuery = search + '+' + params;
    }
    this.displayQuery = this.searchQuery;
    this.gitSearch();   
  }
}

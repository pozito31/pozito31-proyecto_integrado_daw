import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service'
import { GitSearch } from '../git-search'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { AdvancedSearchModel } from '../advanced-search-model'
import { FormControl, FormGroup, Validators } from '@angular/forms'

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
  // Objeto que contendrá todos los campos del formulario
  form: FormGroup;
  formControls = {};
  type: Array<any> = [];
  constructor(private GitSearchService: GitSearchService, private route: ActivatedRoute, private router: Router) {

    this.modelKeys.forEach((key) => {
      let validators = [];
      if (key === 'q') {
        validators.push(Validators.required);
      }
      if (key === 'stars') {
        validators.push(Validators.maxLength(4))
      }

      if (typeof (this.model[key]) === 'string'){
        this.type.push('text');
      } else 
        this.type.push('number');

      validators.push(this.noSpecialChars);
      this.formControls[key] = new FormControl(this.model[key], validators);
    })

    this.form = new FormGroup(this.formControls);
  }

  model = new AdvancedSearchModel('', '', '', null, null, '');
  // Creamos un array con los atributos del objeto 'model' para procesarlo con *ngFor
  modelKeys = Object.keys(this.model);

  noSpecialChars(c: FormControl) {
    let REGEXP = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

    return REGEXP.test(c.value) ? {
      validateEmail: {
        valid: false
      }
    } : null;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.pagina = +params.get('page');
      if (this.pagina == 0) {
        this.pagina = 1;
      }

      this.gitSearch();
    })
    this.route.data.subscribe((result) => {
      this.title = result.title
    });
  }

  checkType = (key) => {
    return typeof key === 'string' ? 'text' : typeof key;
  }

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery, this.pagina).then((response) => {
      this.searchResults = response;
      console.log(response);
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  sendQuery = () => {

    // this.searchResults = null;  
    this.pagina = 1;
    this.searchResults = null;
    let search: string = this.form.value['q'];
    let params: string = "";
    this.modelKeys.forEach((elem) => {
      if (elem === 'q') {
        return false;
      }
      if (this.form.value[elem]) {
        params += '+' + elem + ':' + this.form.value[elem];
      }
    })
    this.searchQuery = search;
    if (params !== '') {
      this.searchQuery = search + params;
    }
    this.displayQuery = this.searchQuery;
    this.gitSearch();
  }

}

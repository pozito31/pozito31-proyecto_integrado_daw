import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';
import { RouterModule, Routes } from '@angular/router';
import { GitSearchComponent } from './git-search/git-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoSpecialCharsDirective } from './no-special-chars.directive';

const appRoutes: Routes = [
  { path: '', 
    component: HomePageComponent 
  },
  { path: 'search',      
    redirectTo: '/search/angular', 
    pathMatch: 'full' },
  {
    path: 'search/:query',
    component: GitSearchComponent,
    data: {title: 'Git Search'}
  },  
  {
    path: 'search/:query/:page',
    component: GitSearchComponent,
    data: {title: 'Git Search'}
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent,
    NoSpecialCharsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ) ,    
    ReactiveFormsModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

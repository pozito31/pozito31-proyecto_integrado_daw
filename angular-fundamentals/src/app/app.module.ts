import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GitSearchService } from './git-search.service';
import { GitUsersService } from './git-users.service';
import { GitSearchComponent } from './git-search/git-search.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoSpecialCharsDirective } from './no-special-chars.directive';

const appRoutes: Routes = [
  { path: '', 
    component: HomePageComponent 
  },
  { path: 'search',      
    redirectTo: '/search/angular', 
    pathMatch: 'full' 
  },
  {
    path: 'search/:query',
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
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule
  ],
  providers: [GitSearchService, GitUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

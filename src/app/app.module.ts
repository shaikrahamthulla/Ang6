import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReversePipe } from './pipe/reverse.pipe';
import { CountryPipe } from './pipe/country.pipe';
import { BindingComponent } from './component/binding/binding.component';
import { PipesComponent } from './component/pipes/pipes.component';

const routes: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: "binding", component:BindingComponent},
  {path: "", redirectTo: "/pipes", pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    CountryPipe,
    BindingComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

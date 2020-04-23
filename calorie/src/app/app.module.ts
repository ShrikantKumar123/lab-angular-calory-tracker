import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodSearchPipe } from './food-search.pipe';
import { FoodComponent } from './food/food.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodSearchPipe,
    FoodComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
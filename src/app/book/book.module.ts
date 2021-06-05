import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookViewComponent } from './book-view/book-view.component';
import { BookAddComponent } from './book-add/book-add.component';



@NgModule({
  declarations: [
    BookViewComponent,
    BookAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }

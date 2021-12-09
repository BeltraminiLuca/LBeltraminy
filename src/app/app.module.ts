import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { data } from './data';

import { PostComponentComponent } from './post-module/post-component.component';
import { ReadMoreDirective } from './Directive/read-more.directive';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    PostComponentComponent,
    ReadMoreDirective,
    PostListComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

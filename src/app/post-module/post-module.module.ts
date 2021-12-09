import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponentComponent } from './post-component.component';
import { ReadMoreDirective } from '../Directive/read-more.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [PostComponentComponent, ReadMoreDirective]
})
export class PostModuleModule { }
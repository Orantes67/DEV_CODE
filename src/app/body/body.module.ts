import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContentComponent } from './section-content/section-content.component';
import { SectionimgComponent } from './sectionImg/sectionimg.component';
import { MainComponent } from './main/main.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SectionContentComponent,
    SectionimgComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    MainComponent,
    SectionContentComponent,
    SectionimgComponent
  ]
})
export class BodyModule { }

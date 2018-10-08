import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatProgressBarModule } from '@angular/material';

import { PipDocumentComponent } from './document.component';

@NgModule({
  declarations: [
    PipDocumentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    PipDocumentComponent
  ],
  providers: [],
})
export class PipDocumentModule { }

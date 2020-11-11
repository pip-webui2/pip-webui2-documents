import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';
import { PipFocusedModule } from 'pip-webui2-behaviors';

import { PipDocumentModule } from '../document/document.module';
import { PipDocumentListComponent } from './document-list.component';

@NgModule({
  declarations: [
    PipDocumentListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,

    TranslateModule,

    PipFocusedModule,
    PipDocumentModule
  ],
  exports: [
    PipDocumentListComponent
  ],
  providers: [],
})
export class PipDocumentListModule { }

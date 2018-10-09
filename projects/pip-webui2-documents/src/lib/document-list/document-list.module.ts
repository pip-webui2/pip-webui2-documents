import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatProgressBarModule, MatButtonModule } from '@angular/material';
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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

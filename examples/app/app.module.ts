import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PipThemesModule } from 'pip-webui2-themes';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

import { DocumentListExampleModule } from './document-list-example/document-list-example.module';
import { DocumentListExampleComponent } from './document-list-example/document-list-example.component';

import { DocumentListEditExampleModule } from './document-list-edit-example/document-list-edit-example.module';
import { DocumentListEditExampleComponent } from './document-list-edit-example/document-list-edit-example.component';

const appRoutes: Routes = [
  { path: 'document_list', component: DocumentListExampleComponent },
  { path: 'document_list_edit', component: DocumentListEditExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'document_list' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    
    TranslateModule.forRoot(),

    PipThemesModule,

    ExampleListModule,
    DocumentListExampleModule,
    DocumentListEditExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
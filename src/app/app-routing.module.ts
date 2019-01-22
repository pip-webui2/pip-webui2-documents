import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentListExampleComponent } from './document-list-example/document-list-example.component';
import { DocumentListEditExampleComponent } from './document-list-edit-example/document-list-edit-example.component';

const appRoutes: Routes = [
    { path: 'document_list', component: DocumentListExampleComponent },
    { path: 'document_list_edit', component: DocumentListEditExampleComponent },
    { path: '**', redirectTo: 'document_list' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, QueryList, trigger, transition, style, animate, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener, ViewChildren } from '@angular/core';

import { TranslateService } from '@ngx-translate/core'
import { DocumentListTranslations } from './shared/document-list.translations'
import { PipDocumentComponent } from '../document/document.component'

import { each } from '../shared/documents.utils';

@Component({
    selector: 'pip-document-list',
    templateUrl: 'document-list.component.html',
    styleUrls: ['./document-list.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ width: '0', opacity: '0' }),
                animate('.35s ease', style({ width: '80px', opacity: '1' })),
            ]),
            transition(':leave', [
                style({ width: '80px', opacity: '1', 'margin-right': '8px' }),
                animate('.35s ease', style({ width: '0', opacity: '0', 'margin-right': '0' })),
            ])
        ]),
    ]
})
export class PipDocumentListComponent implements OnInit, AfterViewInit {
    @Input('collapsable') isCollapsable: boolean = true;
    @Input() showIcon: boolean = true;
    @Input() disabled: boolean = false;
    @Input() icon: string = 'attachments';
    @ViewChildren(PipDocumentComponent) private _viewComponents: QueryList<PipDocumentComponent>;
    public showDocs: boolean = false;
    public loacaledAttachments: string = '';

    ngOnInit() {}

    public docs: any[] = [];
    @Input() set documents(docs: any[]) {
        this.setDocs(docs);
    }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document-list', true);
        this.generateDescription();
        this.translate.setTranslation('en', DocumentListTranslations.en, true);
        this.translate.setTranslation('ru', DocumentListTranslations.ru, true);
    }

    ngAfterViewInit() { 
    }

    private setDocs(docs: any[]) {
        each(docs, (doc) => {
            this.docs.push({
                src: doc.src || doc.url || doc.target || doc.file || doc.id,
                name: doc.name || doc.file_name
            });
        });
        this.generateDescription();
    }

    private generateDescription() {
        this.loacaledAttachments = this.docs.length == 1 ? 'DOCUMENTS.ATTACHMENT' : (this.docs.length > 1 && this.docs.length < 5 ? 
            'DOCUMENTS.ATTACHMENTS' : 'DOCUMENTS.ATTACHMENTS_MORE_THAN_4');
    }

    public toggleDocs() {
        this.showDocs = !this.showDocs;
        if (this.showDocs) this.elRef.nativeElement.querySelector('.pip-documents-container').focus();
    }

    public onEnterSpacePress(event) {
        if (event.index < this._viewComponents.length) 
        this._viewComponents.find((component, index) => {  return index == event.index; }).openInNewTab();
    }
}
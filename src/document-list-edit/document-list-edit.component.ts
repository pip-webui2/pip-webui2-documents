import * as _ from 'lodash';
import { QueryList, Component, trigger, transition, style, animate, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener, ViewChildren, ViewChild } from '@angular/core';
import { PipDocumentEditComponent } from '../document-edit/document-edit.component';
import { PipDocumentComponent } from '../document/document.component'

@Component({
    selector: 'pip-document-list-edit',
    templateUrl: 'document-list-edit.component.html',
    styleUrls: ['./document-list-edit.component.scss'],
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
export class PipDocumentListEditComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    public docs: any[] = [];
    @Input() set documents(docs: any[]) {
        this.setDocs(docs);
    }
    @Input() defaultIcon: string = null;
    @Input() defaultAddIcon: string = 'add';
    @ViewChild(PipDocumentEditComponent) private _editComponent: PipDocumentEditComponent;
    @ViewChildren(PipDocumentComponent) private _viewComponents: QueryList<PipDocumentComponent>;
    @Output() onUpdateImages: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document-list-edit', true);
    }

    ngAfterViewInit() { }

    public onLoad(event) {
        this.docs.push({
            src: event.src,
            name: event.name
        });
        this._editComponent.removeDocument();
        this.updateImagesCallback();
    }

    public onDeleteClick(index) {
        this.removebyIndex(index);
    }

    public onDeletePress(event) {
        this.removebyIndex(event.index);
    }

    public onEnterSpacePress(event) {
        if (event.index < this._viewComponents.length) 
            this._viewComponents.find((component, index) => {  return index == event.index; }).openInNewTab();
    }

    private removebyIndex(index: number) {
        if (index > -1 && index < this.docs.length) {
            this.docs.splice(index, 1);
            this.updateImagesCallback();
        }
    }

    private updateImagesCallback() {
        if (this.onUpdateImages) this.onUpdateImages.emit(this.docs);
    }

    private setDocs(docs: any[]) {
        _.each(docs, (doc) => {
            this.docs.push({
                src: doc.src || doc.url || doc.target || doc.file || doc.id,
                name: doc.name || doc.file_name
            });
        });
    }
}
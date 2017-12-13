import * as _ from 'lodash';
import { QueryList, IterableDiffers, Component, trigger, transition, style, animate, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener, ViewChildren, ViewChild } from '@angular/core';
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

    @Input() public docs: any[] = [];
    @Input() documents: any[];
    @Input() public disabled: boolean = false;

    @Input() defaultIcon: string = null;
    @Input() defaultAddIcon: string = 'add';
    @Input() readAsArrayBuffer: boolean = false;
    @ViewChild(PipDocumentEditComponent) private _editComponent: PipDocumentEditComponent;
    @ViewChildren(PipDocumentComponent) private _viewComponents: QueryList<PipDocumentComponent>;
    @Output() onUpdateDocuments: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document-list-edit', true);
    }


    ngAfterViewInit() { }

    ngDoCheck() {
        if (_.difference(this.documents, this.docs).length > 0) this.setDocs(this.documents);
    }

    public onLoad(event) {
        this.docs.push({
            src: event.src,
            name: event.name
        });
        this._editComponent.removeDocument();
        this.updateDocumentsCallback();
    }

    public onDeleteClick(index) {
        this.removebyIndex(index);
    }

    public onDeletePress(event) {
        this.removebyIndex(event.index);
    }

    public onEnterSpacePress(event) {
        if (event.index < this._viewComponents.length)
            this._viewComponents.find((component, index) => { return index == event.index; }).openInNewTab();
    }

    public onCancelClick(event, index) {
        this.documents[index]['progressVisibility'] = false;
        this.docs[index]['progressVisibility'] = false;
        this.updateDocumentsCallback();
    }

    private removebyIndex(index: number) {
        if (index > -1 && index < this.docs.length) {
            this.docs.splice(index, 1);
            this.updateDocumentsCallback();
        }
    }

    private updateDocumentsCallback() {
        if (this.onUpdateDocuments) this.onUpdateDocuments.emit(this.docs);
    }

    private setDocs(docs: any[]) {
        _.each(docs, (doc, index) => {
            let item = this.generateNewItem(doc);
            if (this.docs[index] && this.docs[index].id == item.id) {
                this.updateItemByIndex(index, item);
            } else {
                this.docs.push(item);
            }
        });
    }

    private updateItemByIndex(index, newItem) {
        _.each(newItem, (value, key) => {
            this.docs[index][key] = value;
        });
    }

    private generateNewItem(doc: any) {
        let docSrc = doc.src || doc.url || doc.target || doc.file || doc.id;

        return {
            src: docSrc,
            id: doc.id || docSrc,
            name: doc.name || doc.file_name,
            progressMode: doc.progressMode || (doc.progress || doc.progressValue) ? 'determinate' : 'indeterminate',
            progress: doc.progress || doc.progressValue,
            progressVisibility: doc.progressVisibility || (doc.progress || doc.progressValue || doc.progressMode) ? true : false
        }
    }


}
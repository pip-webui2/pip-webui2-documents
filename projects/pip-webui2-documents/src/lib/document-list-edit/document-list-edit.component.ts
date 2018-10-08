import {
    QueryList,
    Component,
    Input,
    Output,
    OnInit,
    DoCheck,
    AfterViewInit,
    EventEmitter,
    Renderer,
    ElementRef,
    ViewChildren,
    ViewChild
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { PipDocumentEditComponent } from '../document-edit/document-edit.component';
import { PipDocumentComponent } from '../document/document.component';
import { each, difference } from '../shared/documents.utils';

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
export class PipDocumentListEditComponent implements OnInit, AfterViewInit, DoCheck {
    @Input() public docs: any[] = [];
    @Input() documents: any[];
    @Input() public disabled = false;

    @Input() defaultIcon: string = null;
    @Input() defaultAddIcon = 'add';
    @Input() readAsArrayBuffer = false;
    @ViewChild(PipDocumentEditComponent) private _editComponent: PipDocumentEditComponent;
    @ViewChildren(PipDocumentComponent) private _viewComponents: QueryList<PipDocumentComponent>;
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onUpdateDocuments: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document-list-edit', true);
    }

    ngOnInit() { }


    ngAfterViewInit() { }

    ngDoCheck() {
        if (difference(this.documents, this.docs, (a, b) => {
            for (const key in a) {
                if (a[key] !== b[key]) { return false; }
            }

            return true;
        }).length > 0) { this.setDocs(this.documents); }
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
        if (event.index < this._viewComponents.length) {
            this._viewComponents.find((component, index) => index === event.index).openInNewTab();
        }
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
        if (this.onUpdateDocuments) { this.onUpdateDocuments.emit(this.docs); }
    }

    private setDocs(docs: any[]) {
        each(docs, (doc, index) => {
            const item = this.generateNewItem(doc);
            if (this.docs[index] && this.docs[index].id === item.id) {
                this.updateItemByIndex(index, item);
            } else {
                this.docs.push(item);
            }
        });
    }

    private updateItemByIndex(index, newItem) {
        each(newItem, (value, key) => {
            this.docs[index][key] = value;
        });
    }

    private generateNewItem(doc: any) {
        const docSrc = doc.src || doc.url || doc.target || doc.file || doc.id;

        return Object.assign(doc), {
            src: docSrc,
            id: doc.id || docSrc,
            name: doc.name || doc.file_name,
            progressMode: doc.progressMode || (doc.progress || doc.progressValue) ? 'determinate' : 'indeterminate',
            progress: doc.progress || doc.progressValue,
            progressVisibility: doc.progressVisibility || (doc.progress || doc.progressValue || doc.progressMode) ? true : false
        };
    }
}

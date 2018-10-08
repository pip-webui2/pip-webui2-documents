import { Component, Input, Output, OnInit, OnDestroy, AfterViewInit, ViewChild, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { each } from '../shared/documents.utils';

@Component({
    selector: 'pip-document-edit',
    templateUrl: 'document-edit.component.html',
    styleUrls: ['./document-edit.component.scss']
})
export class PipDocumentEditComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('fileInput') fileInput: any;

    public document: any = {};
    public isProgress = false;
    private _pasteElement: any = null;

    @Input() public disabled = false;
    @Input() public defaultIcon = 'file_upload';
    @Input() readAsArrayBuffer = false;
    @Input('documentName') set name(name: string) {
        this.document.name = name;
    }
    @Input('documentUrl') set doc(url: string) {
        this.document.src = url;
        if (!this.document.name) { this.document.name = url.replace(/^.*[\\\/]/, ''); }
    }

    // tslint:disable-next-line:no-output-rename
    @Output('onLoad') loadEvent: EventEmitter<any> = new EventEmitter<any>();
    // tslint:disable-next-line:no-output-rename
    @Output('onDelete') deleteEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document-edit', true);
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.renderer.listen(this.elRef.nativeElement, 'keypress', (event) => {
            if (event.keyCode === 32 || event.keyCode === 13) { this.elRef.nativeElement.querySelector('input').click(); }
        });
    }

    ngOnDestroy() { }

    public removeDocument() {
        this.document = {};
        this.defaultIcon = 'file_upload';
        this.fileInput.nativeElement.value = '';
    }

    public changeFile(e) {
        const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        each(files, (file) => {
            if (!file) { return; }

            const reader = new FileReader();

            reader.onloadend = (result: any) => {
                if (result) { this.document.src = result.target.result; }
                this.loadEvent.emit({
                    src: result.target.result,
                    name: file.name
                });
            };
            this.document.name = file.name;

            if (this.readAsArrayBuffer) { reader.readAsArrayBuffer(file); } else { reader.readAsDataURL(file); }
        });
        this.defaultIcon = null;
    }

    public onCancelClick() { }

    public onDocumentClick() { }

    public onDeleteClick(data: any) {
        this.removeDocument();
        this.deleteEvent.emit(this.document);
    }
}

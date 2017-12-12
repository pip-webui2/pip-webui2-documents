import { Component, Input, Output, OnInit, AfterViewInit, ViewChild, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { addPasteListener, removePasteListener } from '../shared/document-utils';

@Component({
    selector: 'pip-document-edit',
    templateUrl: 'document-edit.component.html',
    styleUrls: ['./document-edit.component.scss']
})
export class PipDocumentEditComponent implements OnInit, AfterViewInit {
    @ViewChild('fileInput') fileInput: any;
    
    ngOnInit() { }

    public document: any = {};
    private _pasteElement: any = null;

    @Input() public defaultIcon: string = 'file_upload';
    @Input() readAsArrayBuffer: boolean = false;
    @Input('documentName') set name(name: string) {
        this.document.name = name;
    };
    @Input('documentUrl') set doc(url: string) {
        this.document.src = url;
        if (!this.document.name) this.document.name = url.replace(/^.*[\\\/]/, '');
    };

    @Output('onLoad') loadEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output('onDelete') deleteEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document-edit', true);
    }

    ngAfterViewInit() {
        this.renderer.listen(this.elRef.nativeElement, 'keypress', (event) => {
            if (event.keyCode == 32 || event.keyCode == 13) this.elRef.nativeElement.querySelector('input').click();
        })
     }

    ngOnDestroy() {
        removePasteListener(this._pasteElement);
    }

    public removeDocument() {
        this.document = {};
        this.defaultIcon = 'file_upload';
        this.fileInput.nativeElement.value = "";
    }

    public changeFile(e) {
        let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (!file) return;

        let reader = new FileReader();

        reader.onloadend = (result: any) => {
            if (result) this.document.src = result.target.result;
            this.loadEvent.emit(this.document);
        }

        if (this.readAsArrayBuffer) reader.readAsArrayBuffer(file) 
        else reader.readAsDataURL(file);

        this.document.name = file.name;
        this.defaultIcon = null;
    }

    public onDeleteClick() {
        this.removeDocument();
        this.deleteEvent.emit(this.document);
    }
}
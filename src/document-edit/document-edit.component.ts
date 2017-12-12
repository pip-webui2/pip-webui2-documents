import { Component, Input, Output, OnInit, AfterViewInit, ViewChild, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { addPasteListener, removePasteListener } from '../shared/document-utils';

@Component({
    selector: 'pip-document-edit',
    templateUrl: 'document-edit.component.html',
    styleUrls: ['./document-edit.component.scss']
})
export class PipDocumentEditComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    public imageSource: string = null;
    private _pasteElement: any = null;

    @Input() public defaultIcon: string = null;
    @Input() set src(source: string) {
        console.log('this.imageSource', this.imageSource);
        this.imageSource = source;
    }

    @Output('onImageLoad') imageLoadEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output('onImageDelete') imageDeleteEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document-edit', true);
    }

    ngAfterViewInit() {
        this._pasteElement = addPasteListener((event) => {
            this.imageSource = event.url;
            this.imageLoadEvent.emit(event);
        });
    }

    ngOnDestroy() {
        removePasteListener(this._pasteElement);
    }

    public onImageLoad(results) {
        if (!results || !results.img) return;
        this.imageSource = results.img.url;
        this.imageLoadEvent.emit(results.img);
    }

    public onDeleteClick(event) {
        event.cancelBubble = true;
        this.removeImage();
    }

    public removeImage() {
        this.imageSource = null;
        this.imageDeleteEvent.emit();
    }
}
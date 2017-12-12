import { Component, trigger, transition, style, animate, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PipDocumentEditComponent } from '../document-edit/document-edit.component';

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

    public imageSources: string[] = [];
    @Input() set srcs(sources: string[]) {
        this.imageSources = sources;
    }
    @Input() defaultIcon: string = null;
    @Input() defaultAddIcon: string = 'add';
    @ViewChild(PipDocumentEditComponent) private _editComponent: PipDocumentEditComponent;
    @Output() onUpdateImages: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document-list-edit', true);
    }

    ngAfterViewInit() { 
        
    }

    public onImageLoad(event) {
        this.imageSources.push(event.url);
        this._editComponent.removeImage();
        this.updtaeImagesCallback();
    }

    public onDeleteClick(index) {
        this.removeImagebyIndex(index);
    }

    public onDeletePress(event) {
        this.removeImagebyIndex(event.index);
    }

    private removeImagebyIndex(index: number) {
        if (index > -1 && index < this.imageSources.length) {
            this.imageSources.splice(index, 1);
            this.updtaeImagesCallback();
        }
    }

    private updtaeImagesCallback() {
        if (this.onUpdateImages) this.onUpdateImages.emit(this.imageSources);
    }
}
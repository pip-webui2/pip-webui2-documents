import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { setImageMarginCSS, setErrorImageCSS } from '../shared/document-utils';

@Component({
    selector: 'pip-document',
    templateUrl: 'document.component.html',
    styleUrls: ['./document.component.scss']
})
export class PipDocumentComponent implements OnInit, AfterViewInit {
    public document: any = {};
    private _defaultColorOpacity: string = '0.56';
    private _opacity: string = null;

    @Input('documentName') set name(name: string) {
        this.document.name = name;
    };
    @Input('documentUrl') set doc(url: string) {
        this.document.src = url;
        if (!this.document.name) this.document.name = url.replace(/^.*[\\\/]/, '');
    };
    @Input() defaultIcon: string = null;
    @Input() set backgroundColor(color: string) {
        this.renderer.setElementStyle(this.elRef.nativeElement, 'background-color', color);
    }
    @Input() set foregroundColor(color: string) {
        this.renderer.setElementStyle(this.elRef.nativeElement, 'color', color);
    }
    @Input() set foregroundColorOpacity(opacity: string) {
        this._opacity = opacity;
        this.renderer.setElementStyle(
            this.elRef.nativeElement.querySelector('mat-icon'), 'opacity', opacity || this._defaultColorOpacity
        );
    }
    @Output() onDocumentClick: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
        if (this._opacity == null)
            this.renderer.setElementStyle(
                this.elRef.nativeElement.querySelector('mat-icon'), 'opacity', this._defaultColorOpacity
            );
    }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-document', true);
    }

    ngAfterViewInit() { }

    public onClick() {
        if (this.onDocumentClick) {
            this.onDocumentClick.emit({
                fileName: this.document.name,
                src: this.document.src
            });
        } else {
            window.open(this.document.src, this.document.name)
        }
    }
}
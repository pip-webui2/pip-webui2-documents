import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { setImageMarginCSS, setErrorImageCSS } from '../shared/document-utils';

@Component({
    selector: 'pip-document',
    templateUrl: 'document.component.html',
    styleUrls: ['./document.component.scss']
})
export class PipDocumentComponent implements OnInit, AfterViewInit {
    public source: string = null;
    private _imageBlock: HTMLElement;
    private _defaultIconBlock: HTMLElement;
    private _defaultColorOpacity: string = '0.56';
    private _opacity: string = null;

    @Input() set src(source: string) {
        this.source = source;
    }
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
    @Output('onImageLoad') imageLoadEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output('onImageError') imageErrorEvent: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
        this._imageBlock = this.elRef.nativeElement.querySelector('img')
        this._defaultIconBlock = this.elRef.nativeElement.querySelector('div');
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

    ngAfterViewInit() {

    }

    public onImageError($event) {
        var image = $event.path ? $event.path[0] : null;

        setErrorImageCSS(image, {});
        image.style.cssText += 'display: none';
        this._defaultIconBlock.style.cssText += 'display: flex';
        if (this.imageErrorEvent) this.imageErrorEvent.emit();
    }

    public onImageLoad($event) {
        var image = $event.path ? $event.path[0] : null;

        setImageMarginCSS(this.elRef.nativeElement, image, {});
        image.style.cssText += 'display: flex';
        this._defaultIconBlock.style.cssText += 'display: none';
        if (this.imageLoadEvent) this.imageLoadEvent.emit();
    };
}
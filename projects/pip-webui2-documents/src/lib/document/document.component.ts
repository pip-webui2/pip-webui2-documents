import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
    selector: 'pip-document',
    templateUrl: 'document.component.html',
    styleUrls: ['./document.component.scss']
})
export class PipDocumentComponent implements OnInit, AfterViewInit {
    public document: any = {};
    private _defaultColorOpacity = '0.56';
    private _opacity: string = null;
    private _openDocInNewTab = true;

    @Input() disabled = false;
    @Input() public noErrorState = false;

    @Input() set openInTab(open: boolean) {
        this._openDocInNewTab = open;
    }
    @Input('documentName') set name(name: string) {
        this.document.name = name;
    }
    @Input('documentUrl') set doc(url: string) {
        this.document.src = url;
        if (!this.document.name && url) { this.document.name = url.replace(/^.*[\\\/]/, ''); }
    }
    @Input() defaultIcon: string = null;
    @Input() set backgroundColor(color: string) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
    }
    @Input() set foregroundColor(color: string) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', color);
    }
    @Input() set foregroundColorOpacity(opacity: string) {
        this._opacity = opacity;
        this.renderer.setStyle(this.elRef.nativeElement.querySelector('mat-icon'), 'opacity', opacity || this._defaultColorOpacity);
    }
    @Input() public progressMode = 'indeterminate';
    @Input() public progress = 0;
    @Input() public progressVisibility = false;

    // tslint:disable-next-line:no-output-on-prefix
    @Output() onDocumentClick: EventEmitter<any> = new EventEmitter<any>();
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onCancelClick: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
        if (this._opacity == null) {
            this.renderer.setStyle(this.elRef.nativeElement.querySelector('mat-icon'), 'opacity', this._defaultColorOpacity);
        }
    }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-document');
    }

    ngAfterViewInit() { }

    public onClick() {
        if (this.disabled) { return; }

        if (this.progressVisibility) {
            this.progressVisibility = false;
            this.onCancelClick.emit({
                fileName: this.document.name,
                name: this.document.name,
                src: this.document.src
            });

            return;
        }

        this.onDocumentClick.emit({
            fileName: this.document.name,
            name: this.document.name,
            src: this.document.src
        });
        this.openInNewTab();
    }

    public get icon() {
        return this.progressVisibility
            ? 'clear'
            : this.document.src || this.noErrorState
                ? (this.defaultIcon || 'insert_drive_file')
                : 'error';
    }

    public openInNewTab() {
        if (this._openDocInNewTab && this.document.src) { window.open(this.document.src, this.document.name); }
    }
}

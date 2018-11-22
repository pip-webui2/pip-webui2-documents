import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PipDocumentComponent } from './document.component';
import { PipDocumentModule } from './document.module';

describe('a pip-document component', () => {
    let component: PipDocumentComponent;
    let fixture: ComponentFixture<PipDocumentComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PipDocumentModule]
        });
        fixture = TestBed.createComponent(PipDocumentComponent);
        component = fixture.componentInstance;
    });

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});

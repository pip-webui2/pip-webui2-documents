import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { PipMediaModule } from 'pip-webui2-layouts';

import { DocumentListExampleComponent } from './document-list-example.component';
import { DocumentListExampleModule } from './document-list-example.module';

describe('DocumentListExampleComponent', () => {
  let component: DocumentListExampleComponent;
  let fixture: ComponentFixture<DocumentListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FlexLayoutModule,
        TranslateModule.forRoot(),
        PipMediaModule,

        DocumentListExampleModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

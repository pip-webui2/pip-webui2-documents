import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { PipMediaModule } from 'pip-webui2-layouts';

import { DocumentListEditExampleComponent } from './document-list-edit-example.component';
import { DocumentListEditExampleModule } from './document-list-edit-example.module';

describe('DocumentListEditExampleComponent', () => {
  let component: DocumentListEditExampleComponent;
  let fixture: ComponentFixture<DocumentListEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FlexLayoutModule,
        TranslateModule.forRoot(),
        PipMediaModule,

        DocumentListEditExampleModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentListEditExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

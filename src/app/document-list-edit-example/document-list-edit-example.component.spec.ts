import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentListEditExampleComponent } from './document-list-edit-example.component';

describe('DocumentListEditExampleComponent', () => {
  let component: DocumentListEditExampleComponent;
  let fixture: ComponentFixture<DocumentListEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentListEditExampleComponent ]
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

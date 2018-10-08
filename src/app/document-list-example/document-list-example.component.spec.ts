import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentListExampleComponent } from './document-list-example.component';

describe('DocumentListExampleComponent', () => {
  let component: DocumentListExampleComponent;
  let fixture: ComponentFixture<DocumentListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentListExampleComponent ]
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

import { DocumentListEditExampleModule } from './document-list-edit-example.module';

describe('DocumentListEditExampleModule', () => {
  let documentListEditExampleModule: DocumentListEditExampleModule;

  beforeEach(() => {
    documentListEditExampleModule = new DocumentListEditExampleModule();
  });

  it('should create an instance', () => {
    expect(documentListEditExampleModule).toBeTruthy();
  });
});

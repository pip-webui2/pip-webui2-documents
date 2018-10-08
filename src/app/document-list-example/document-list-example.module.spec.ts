import { DocumentListExampleModule } from './document-list-example.module';

describe('DocumentListExampleModule', () => {
  let documentListExampleModule: DocumentListExampleModule;

  beforeEach(() => {
    documentListExampleModule = new DocumentListExampleModule();
  });

  it('should create an instance', () => {
    expect(documentListExampleModule).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { DocumentExampleComponent } from './document-example.component';

describe('a document-example component', () => {
	let component: DocumentExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DocumentExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DocumentExampleComponent], (DocumentExampleComponent) => {
		component = DocumentExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
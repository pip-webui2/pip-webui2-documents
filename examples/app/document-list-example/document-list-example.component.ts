import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'document-list-example',
	templateUrl: 'document-list-example.component.html',
	styleUrls: ['./document-list-example.component.scss']
})
export class DocumentListExampleComponent implements OnInit {

	ngOnInit() { }

	public isProgress: boolean = true;

	public openMe() {
		console.log('open me please');
	}

	public onCancelClick() {
		this.isProgress = false;
	}

	public docs = [
        {
            url: './assets/boy.png'
        },
        {
            url: './assets/girl.png'
        },
        {
            url: './assets/girl2.png'
        },
        {
            url: './assets/boy2.png'
        }
    ];
}
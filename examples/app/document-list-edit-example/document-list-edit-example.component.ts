import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'document-list-edit-example',
	templateUrl: 'document-list-edit-example.component.html',
	styleUrls: ['./document-list-edit-example.component.scss']
})
export class DocumentListEditExampleComponent implements OnInit {

    public sources: string[] = [
        './assets/boy.png',
        './assets/girl2.png',
        './assets/boy2.png',
        './assets/girl.png',
        'https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg'
    ];

    ngOnInit() { }
    
    public onImageLoad(results) {
        console.log('Image loaded: ', results);
    }

    public onImageDelete(results) {
        console.log('Image deleted!');
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
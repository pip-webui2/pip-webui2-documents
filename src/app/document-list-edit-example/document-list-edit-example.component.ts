import { Component, OnInit } from '@angular/core';
import { each } from 'lodash';
import { PipSidenavService } from 'pip-webui2-layouts';
import { PipNavService } from 'pip-webui2-nav';

@Component({
  selector: 'app-document-list-edit-example',
  templateUrl: './document-list-edit-example.component.html',
  styleUrls: ['./document-list-edit-example.component.scss']
})
export class DocumentListEditExampleComponent implements OnInit {
  public disabled = false;
  public docs: any[] = [
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

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
  ) {
    this.sidenav.active = true;
    this.navService.showTitle('Document list edit');
  }

  ngOnInit() {
  }

  public onImageLoad(results) {
    console.log('Image loaded: ', results);
  }

  public onImageDelete(results) {
    console.log('Image deleted!');
  }

  public uploadDocs() {
    each(this.docs, (doc) => {
      doc.progressVisibility = true;
      doc.progressMode = 'indeterminate';
      this.disabled = true;
      setTimeout(() => {
        doc.progressVisibility = false;
        this.disabled = false;
      }, 2000);
    });
  }

  public updateDocuments(docs) {
    this.docs = docs;
  }

}

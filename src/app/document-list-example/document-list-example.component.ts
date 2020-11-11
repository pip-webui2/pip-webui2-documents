import { Component, OnInit } from '@angular/core';
import { PipSidenavService } from 'pip-webui2-layouts';
import { PipNavService } from 'pip-webui2-nav';

@Component({
  selector: 'app-document-list-example',
  templateUrl: './document-list-example.component.html',
  styleUrls: ['./document-list-example.component.scss']
})
export class DocumentListExampleComponent implements OnInit {

  public isProgress = true;

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

  constructor(
    private navService: PipNavService,
  ) {
    this.navService.showTitle('Document list');
  }

  ngOnInit() {
  }

  public openMe() {
    console.log('open me please');
  }

  public onCancelClick() {
    this.isProgress = false;
  }

}

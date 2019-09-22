import { Component, OnInit, Input } from '@angular/core';

export interface Definition {
  'title': string,
  'description': string
}

@Component({
  selector: 'app-page-documentation',
  templateUrl: './page-documentation.component.html',
  styleUrls: ['./page-documentation.component.css']
})
export class PageDocumentationComponent implements OnInit {
  
  private readonly animationTimeMS: number;
  classes: string[];
  @Input()
  items: Definition[];
  @Input()
  set hidden(hide: boolean) {
    if(hide) {
      this.classes = [ 'hide' ];
      setTimeout(() => {
        this.classes.push('gone');
      }, this.animationTimeMS);
    }
    else {
      this.classes.pop();
      setTimeout(() => {
        this.classes = [];
      }, this.animationTimeMS);
    }
  }
  
  constructor() {
    this.animationTimeMS = 300;
  }

  ngOnInit() {
  }
  
}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabular-input',
  templateUrl: './tabular-input.component.html',
  styleUrls: ['./tabular-input.component.css']
})
export class TabularInputComponent implements OnInit {
  
  /*
   * Types of expected inputs:
   *
   * Single column
   * rows = [ 0, 0, ..., 0 ]
   * 
   * Single column with objects
   * rows = [ { keyValue: 0 }, { keyValue: 0 }, ..., { keyValue: 0 } ]
   * 
   * Multi-column
   * rows = [ { 'c1': 0, 'c2': 0, 'c3': 0 }, ...,  { 'c1': 0, 'c2': 0, 'c3': 0 } ]
   */
  readonly keys: any;
  @Input()
  readonly header: string[];
  @Input()
  readonly rows: object[];
  @Input()
  readonly keyValue: string;
  @Input()
  readonly multiColumn: boolean;
  @Input()
  set timeUnit(timeUnit: string) {
    this.header[0] = `${this.header[0]} (${timeUnit.toLowerCase()})`;
  }
  
  constructor() {
    this.keys = Object.keys;
  }
  
  ngOnInit() {}
  
  isSingleColumn(): boolean {
    return !this.multiColumn;
  }
  
  isSingleColumnWithKey(): boolean {
    return !this.multiColumn && typeof this.keyValue == 'string';
  }
  
  isMultiColumn(): boolean {
    return this.multiColumn;
  }
  
}
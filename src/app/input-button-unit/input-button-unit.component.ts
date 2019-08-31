import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: 'input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  inputValue = 'wartosc 0';

  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('Title: ' + this.title);
    this.title = 'I love Angular';
    this.inputValue = 'example';
    console.log('constructor done');
    console.log('Title: ' + this.title);
  }
  ngOnInit() {
     this.title = 'final title';
     console.log('ngOnInit done');
  }

  generateTitle(): string {
    console.log('generate title');
    return 'Generated title';
  }

  submitValue(newTitle: string): void {
    console.log('Value: ' + newTitle);
    this.submit.emit(newTitle);
    // this.title = newTitle;
  }

}


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-field',
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.scss'],
})
export class DataFieldComponent {
  @Input() value: any = '';
  @Input() fieldName: string = '';

  constructor() {}
}

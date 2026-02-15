import { Component } from '@angular/core';

@Component({
  selector: `a[link-button]`,
  imports: [],
  template: '<ng-content/>', //Pode receber elementos HTML dentro do componente
  styleUrl: './link-button.css',
})
export class LinkButton {

}
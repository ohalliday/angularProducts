import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <div>Component Test</div>
    </div>
  `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-nav></app-nav>
	    <events-list></events-list>
  	`
})
export class AppComponent {
    title = 'get-start';
}

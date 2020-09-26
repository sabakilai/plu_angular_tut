import { Component , Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .thumbnail {min-heing: 210px;}
    `]
})
export class EventThumbnailComponent {
    @Input() event: any; 

}

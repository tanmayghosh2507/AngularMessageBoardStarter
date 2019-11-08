import { Component, Output, EventEmitter } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'new-message',
    template: `
    <mat-card class="card">
        <mat-card-content>
            <mat-form-field>
                <input [(ngModel)]="message.owner" matInput placeHolder="Name">
            </mat-form-field>
            <mat-form-field>
                <textarea [(ngModel)]="message.text" matInput placeHolder="Message"></textarea>
            </mat-form-field>
        </mat-card-content>
        <mat-card-actions>
            <button (click)="post()" mat-button color="primary">Post</button>
        </mat-card-actions>
    </mat-card>
    `
})

export class NewMessageComponent {

    @Output() onPosted = new EventEmitter();
    constructor(private webService: WebService) { }

    message = {
        owner: '',
        text: ''
    };

    post() {
        this.webService.postMessage(this.message);
        this.onPosted.emit(this.message);
    }
}

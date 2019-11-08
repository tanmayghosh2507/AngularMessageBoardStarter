import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages">
        <mat-card class="card">
            <mat-card-title>{{message.text}}</mat-card-title>
            <mat-card-content>{{message.owner}}</mat-card-content>
        </mat-card>
        </div>
    `
})

export class MessagesComponent {
    constructor(private webService: WebService) { }
    messages: any = [];

    async ngOnInit() {
        const res = await this.webService.getMessages();
        this.messages = res;
    }

}

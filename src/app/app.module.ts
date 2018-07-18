import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { SendMessageFormComponent } from './send-message-form/send-message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    MessageComponent,
    MessageListComponent,
    SendMessageFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ChatkitService } from '../chatkit.service';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.css']
})
export class SendMessageFormComponent implements OnInit {
  messageText: string = '';
  
  constructor() {
    
  }

  ngOnInit() {
  }

  sendMessage(){
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ChatkitService } from '../chatkit.service';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: any[] = []
  room: any = null;
  constructor() { 
    
  }

  ngOnInit() {

  }
  
  ngDoCheck(){
     
  }

  
}

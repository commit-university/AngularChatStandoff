import { Component, OnInit } from '@angular/core';
import { ChatkitService } from '../chatkit.service';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: any[];
  roomId: any;

  constructor() { 

  }

  ngOnInit() {
   
  }

  ngDoCheck() {
  }

  subscribe(){
   
  }



}

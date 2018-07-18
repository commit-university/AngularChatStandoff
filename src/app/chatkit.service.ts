import { Injectable } from '@angular/core';
import Chatkit from '@pusher/chatkit'
import { tokenUrl, instanceLocator, userName } from '../config' 


@Injectable({
  providedIn: 'root'
})
export class ChatkitService {
  currentUser: any;
  rooms: any[];
  chatManager;
  roomId: null;
  messages: any[] = [];
  joinableRooms: any[];
  joinedRooms: any[]

  constructor() {

  }

  connect(){

  }

  getRooms() {
   
  }

  subscribeToRoom() {
    
  }
}



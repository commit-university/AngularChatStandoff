import { Component } from '@angular/core';
import {ChatkitService} from './chatkit.service'
import { tokenUrl, instanceLocator, userName } from '../config' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = userName;

  constructor(chatkitService: ChatkitService){

  }
}

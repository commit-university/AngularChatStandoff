import { Component, OnInit, Input } from '@angular/core';
import { userName } from '../../config';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message;

  username=userName;
  constructor() { }

  ngOnInit() {
  }

}

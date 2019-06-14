import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  animations: [
    trigger('login-modal', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class LoginDialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  

  constructor( ) { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  
}
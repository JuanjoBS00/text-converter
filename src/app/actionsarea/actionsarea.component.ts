import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionsService } from '../actions.service';

@Component({
  selector: 'app-actionsarea',
  templateUrl: './actionsarea.component.html',
  styleUrls: ['./actionsarea.component.css']
})
export class ActionsareaComponent implements OnInit {

  @Input() rawText = ''; //Receives the textAreaContent from EntryArea
  @Output() check = new EventEmitter<string>(); // Request an event to EntryArea

  res=""; 

  constructor(private _actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  performAction(selection: string) {

    this._actionsService.setTextArea(this.rawText); //Sets the service text variable with the introduced by the user
    this.res = this._actionsService.action(selection); //sets the res variable with the result of the operation selected by the user

  
    if (this.res == "Empty") {
      this.check.emit("true");
    }
    
  }

  

}

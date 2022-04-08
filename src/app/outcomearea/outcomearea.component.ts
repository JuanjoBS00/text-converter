import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outcomearea',
  templateUrl: './outcomearea.component.html',
  styleUrls: ['./outcomearea.component.css']
})
export class OutcomeareaComponent implements OnInit {

  title = 'El resultado de la conversión es el siguiente: ';
  @Input() fixedText = "";

  constructor() { }

  ngOnInit(): void {
  }

  

}

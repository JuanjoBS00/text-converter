import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entryarea',
  templateUrl: './entryarea.component.html',
  styleUrls: ['./entryarea.component.css']
})
export class EntryareaComponent implements OnInit {

  title = 'Introduce el texto que deseas convertir: ';
  textAreaContent = "";

  constructor() { }

  ngOnInit(): void {
  }

  //Clear the textAreaContent
  reset(check: string) {
    if (check == "true") {
      this.textAreaContent="";
    }
  }  

}

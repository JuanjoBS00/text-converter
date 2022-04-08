import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor() { }

  text="";

  //Sets the text from ActionButtons 
  setTextArea(text: string) {
    this.text = text;
  }

    
  public action(selection : string): string{

    switch (selection) {
  
      case "mayus":
        return this.text.toUpperCase();
      break;
  
      case "minus":
        return this.text.toLowerCase();
      break;
  
      case "reset":
        return "Empty";
      break;

      case "exclamation":
        var result = "";
        var initexl = "¡"
        var endexl = "!";
        result = initexl.concat(this.text).concat(endexl);
        return result;
      break;

      case "interrogation":
        var result = "";
        var initintr = "¿"
        var endintr = "?";
        result = initintr.concat(this.text).concat(endintr);
        return result;
      break;

      case "acounter":
        var acount = 0;

        for(let i=0; i < this.text.length; i++){
          if(this.text.charAt(i) == "a" || this.text.charAt(i) == "A"){
            acount++;
          }
        }
        return acount.toString();

      break;

      }
      
      return "Error";
  
    }

}

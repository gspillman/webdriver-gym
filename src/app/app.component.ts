import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webdriver-gym'
  toDoArray = []
  simpleTextBlob
  addToDo(value) {
    if (value === '') {
      console.log('Value cannot be null');
    }
    else {
      this.toDoArray.push(value);
      console.log(this.toDoArray);
    }
  }
  addText(value) {
    if (value.toString().length > 50) {
      console.log('Cannot accept text value greater than 50 characters');
      this.simpleTextBlob = 'TOO MANY CHARACTERS';
    }
    else {
      this.simpleTextBlob = value;
      console.log('Success!');
    }
  }
  deleteItem(todo) {
    console.log('delete item');
    for (let i=0 ;i<= this.toDoArray.length ;i++) {
      if(todo==this.toDoArray[i]){
        this.toDoArray.splice(i,1);
      }
    }
  }
}

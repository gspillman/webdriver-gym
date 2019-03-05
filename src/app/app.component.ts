import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webdriver-gym'
  toDoArray = []
  addToDo(value) {
    if (value === '') {
      console.log('Value cannot be null');
    }
    else {
      this.toDoArray.push(value);
      console.log(this.toDoArray);
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

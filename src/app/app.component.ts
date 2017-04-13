import { Component } from '@angular/core';
import { dayModel, note } from 'shared/dayModel';
import { TextMaskModule } from 'angular2-text-mask'; 
import { FormsModule } from '@angular/forms';

const DaysInCalendar=35;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  get title(): string {
    if (this.selectedDay) return this.selectedDay.title;
    else return "select a day";
  }
  get isDaySelected(): boolean {
    return this.selectedDay != null;
    
  }

  week: Array<dayModel>;
  selectedDay: dayModel;
  selectedItem: note;
  selectedItemText: string = '';
  startDate: any;

  public myModel = ''
  public mask = [/\d/, /\d/,':', /\d/, /\d/];

  constructor() {
    this.week = [];
    var firstDayInWeek = new Date();
    var currentMonth = firstDayInWeek.getMonth();
    firstDayInWeek.setDate(1);
    for (var i = (1 - (firstDayInWeek.getDay()- firstDayInWeek.getDate())); i <= DaysInCalendar-firstDayInWeek.getDay()+1; i++) {
      var date = new Date();
      date.setDate(i);
      this.week.push(new dayModel(date,currentMonth));
    }
    this.selectedDay = this.week.find(el=>el.dateNumber == new Date().getDate());
    this.selectedDay.todayDay = true;
    this.selectedDay.isSelected = true;
   
    
  };
 
  onEdit(item: note){
    this.selectedItemText = item.line;
    this.selectedItem = item;
    
  }
  updateHero(event) {
    if(event.which === 13) {
      if(this.selectedItem !== undefined)
        this.selectedItem.line = event.target.value;
        this.selectedItemText = '';
  
    }
  }


  weekChange(day: dayModel) {
    this.week.forEach(element => element.isSelected = false);
    
      this.selectedDay = day;
      day.isSelected = true;  
  }

}


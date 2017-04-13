export class dayModel {
  private DomainModel: Date;
  private currentMonth: number;
  list: Array<note>;
  isSelected: boolean;
  todayDay: boolean;
  noteLine: string;
  noteTime: string;
  get title(): string {
    if (this.DomainModel) return this.DomainModel.toDateString();
    else return "select a day";
  }

  get dateNumber(): number {
    if (this.DomainModel) return this.DomainModel.getDate();
    else return 0;
  }

  get dayNumber(): number {
    if (this.DomainModel) return this.DomainModel.getDay();
    else return 0;

  }
  get hasNotes(): boolean {
    if (this.list && this.list.length > 0)
      return true;
    else
      return false;

  }
  get dayOff(): boolean {
    if (this.DomainModel) {
      var dayNum = this.DomainModel.getDay();
      if (dayNum == 6 || dayNum == 0)
        return true;
      else
        return false;
    }
    else return false;
  }

  get presentMonth(): boolean {
    if (this.DomainModel) {
      var month = this.DomainModel.getMonth();
      if (month == this.currentMonth)
        return true;
      else
        return false;
    }
    else return false;
  }

  constructor(model: Date, currentMonth: number) {
    this.currentMonth = currentMonth;
    this.DomainModel = model;
    this.list = [];
  }
  onSubmit() {
    this.addNote(this.noteLine, this.noteTime);
    
    this.noteLine = "";
    this.noteTime = "";
  }
  
  addNote(item: string, time:string) {
    if (item != null && item.length > 0 && item.length < 128) {
     // var time = new Date().toLocaleTimeString();
      var newNote = new note(item, time, this);
      this.list.push(newNote);
      console.log();
    }
  }

  delete(item: note) {
    if (item) {
      var index = this.list.indexOf(item);
      if (index >= 0 && index < this.list.length)
        this.list.splice(index, 1);
    }
  }
}

export class note {
  get displayTime(): any {
    return this.time;
  }
  get displayNode(): any {
    return this.line;
  }
  constructor(public line: string, public time: string, public parent: dayModel) {
  }
}


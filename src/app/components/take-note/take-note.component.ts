import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteServiceService } from '../../services/noteService/note-service.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss'],
})
export class TakeNoteComponent implements OnInit {
  isOpen = true;
  title = '';
  description = '';
  hide = true;
  setColor = '';
  click() {
    this.isOpen = true;
  }
  constructor(private noteservice: NoteServiceService) {}
  @Output() messageEvent1 = new EventEmitter<any>();
  @Output() messageEvent2 = new EventEmitter<any>();
  ngOnInit() {}
  addNote() {
    let data = {
      title: this.title,
      description: this.description,
    }
    console.log(" add note data ", data);
    this.noteservice.createNote(data).subscribe((response) => {
      this.messageEvent2.emit("message emitted");
      console.log("subscribe",response);
      let message = "note created successfull";
      this.messageEvent1.emit(message);
    })
  }
}

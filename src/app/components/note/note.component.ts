import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../services/noteService/note-service.service';
import { DataServiceService } from '../../services/dataService/data-service.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  constructor(
    private noteService: NoteServiceService,
    private dataservice: DataServiceService
  ) {}
  notes = [];
  note = [];
  ngOnInit(): void {
    this.getAllNotes();
    this.dataservice.currentMessage.subscribe((msg) => {
      console.log(' message ', msg);
      this.getAllNotes();
    });
  }
  receiveMessage($event) {
    console.log(' message get all notee from create note', $event);
    this.getAllNotes();
  }
  getAllNotes() {
    this.noteService.getAllNotes().subscribe(response => {
      console.log(response);
      this.note = response['data'].data;

      this.notes = this.note.filter((ele) => {
        console.log(ele.isDeleted);
        return ele.isDeleted == false;
      });
      console.log(' flitered array ');

      console.log(this.notes);
    });
  }
}

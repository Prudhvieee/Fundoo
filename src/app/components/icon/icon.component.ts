import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NoteServiceService } from '../../services/noteService/note-service.service';
import { DataServiceService } from '../../services/dataService/data-service.service';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  constructor(
    private noteService: NoteServiceService,
    private dataService: DataServiceService
  ) {}

  ngOnInit() {}
  @Input() note: any;
  deleteNote() {
    console.log(this.note);
    let data = {
      noteIdList: [this.note.id],
      isDeleted: true,
    };
    this.noteService.deleteNotes(data).subscribe((response) => {
      console.log(' dleted successfyull ');
      this.dataService.changeMessage('deleted');
    });
  }
}

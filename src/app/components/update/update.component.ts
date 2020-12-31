import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from '../../services/noteService/note-service.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title;
  description;
  id;
  pin=true;
  color:'';
  constructor(
    private noteService: NoteServiceService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(" note data in update", data);
    this.title = data.note.title,
      this.description = data.note.description
      this.id=data.note.id
  }
  ngOnInit() {
  }
  updateNote(data1) {

    let data = {
      noteId: this.id,
      title: this.title,
      description: this.description,
    }
    console.log("printing ", data );
    this.noteService.updateNote(data).subscribe((response) => {
      console.log(" updated successfull", response);
      this.onNoClick();
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

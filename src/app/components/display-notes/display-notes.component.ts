import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UpdateComponent} from '../update/update.component'

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  
  open=true;
  pinNote(card){};
  pin(){};
  card="";
  isTrash=true;
  constructor(public dialog: MatDialog) { }

  @Input() AllNotes: any
  ngOnInit() {
  }
  openDialog(card: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: {note: card}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {

  @Input() childSelectedKeg: Keg;
  @Output() clickedDone = new EventEmitter();

  constructor() { }

  finishedEditing() {
  this.clickedDone.emit();
}

  ngOnInit() {
  }

}

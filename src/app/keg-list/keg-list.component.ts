import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  pricesColor(keg){
    console.log(keg.price);
    if(keg.price >= 10 ){
      return "bg-danger";
    } else if (keg.price >= 6 && keg.price <= 9){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editButtonClicked(kegToEdit: Keg) {
  this.clickSender.emit(kegToEdit)
}

  constructor() { }

  ngOnInit() {
  }

}

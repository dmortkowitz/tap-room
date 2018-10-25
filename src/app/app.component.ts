import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';

  kegList: Keg[] = [
    new Keg("IPA", "Seattle IPA", 12, 5),
    new Keg("Ale", "Washington IPA", 7, 6),
    new Keg("Japanese Beer", "Sapporo", 5, 4)
  ]

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing () {
    this.selectedKeg = null;
  }
}

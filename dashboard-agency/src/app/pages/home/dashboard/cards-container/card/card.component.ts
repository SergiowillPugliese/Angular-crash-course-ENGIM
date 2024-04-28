import { Component, Input } from '@angular/core';
import { ImmobiliVM } from 'src/app/shared/model/immobili.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() immobile!: ImmobiliVM;

}

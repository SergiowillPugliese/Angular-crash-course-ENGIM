import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImmobiliDTO } from 'src/app/shared/model/immobili.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() immobile!: ImmobiliDTO;
  @Input() isSelected: boolean = false;
  @Input() selectedId!: number;
  @Output() selectedImmobile: EventEmitter<ImmobiliDTO> = new EventEmitter();

  ngOnChanges(): void {
    this.isSelected = this.immobile.id === this.selectedId;
  }


  onSelectedItem() {
    this.selectedImmobile.emit(this.immobile)
  }

}

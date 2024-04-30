import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription, lastValueFrom } from 'rxjs';
import { ImmobiliDTO } from 'src/app/shared/model/immobili.model';
import { ImmobiliService } from 'src/app/shared/services/immobili.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  immobili!: ImmobiliDTO[];
  immobili$!: Observable<ImmobiliDTO[]>;
  @Output() selectedImmobileFromCard = new EventEmitter<ImmobiliDTO>();
  @Input() selectedId!: number;

  constructor(private immobiliService: ImmobiliService) { }

  ngOnInit(): void {
    // this.immobiliService.getImmobili().subscribe((data: ImmobiliDTO[]) => {
    //   console.log(data);
    //   this.immobili = data;
    // });

    this.immobili$ = this.immobiliService.getImmobili();

    this.onGetImmobili();

  }

  async onGetImmobili() {
    try {
      this.immobili = await lastValueFrom(this.immobiliService.getImmobili());
    } catch (error) {
      console.log(error);
    } finally {
      //console.log(this.immobili);
    }
  }

  onSelect(immobile: ImmobiliDTO) {
    this.selectedImmobileFromCard.emit(immobile);
  }

}

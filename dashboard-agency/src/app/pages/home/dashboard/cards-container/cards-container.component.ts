import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { ImmobiliDTO } from 'src/app/shared/model/immobili.model';
import { ImmobiliService } from 'src/app/shared/services/immobili.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  //creare poi una variabile e una funzione get per prendere gli immobiliVM

  immobili!: ImmobiliDTO[];
  immobili$!: Observable<ImmobiliDTO[]>;


  constructor(private immobiliService: ImmobiliService) { }

  ngOnInit(): void {
    // this.immobiliService.getImmobili().subscribe((data: ImmobiliDTO[]) => {
    //   console.log(data);
    //   this.immobili = data;
    // });

    // this.immobili$ = this.immobiliService.getImmobili();

    this.onGetImmobili();

  }

  async onGetImmobili() {
    try {
      this.immobili = await lastValueFrom(this.immobiliService.getImmobili());
    } catch (error) {
      console.log(error);
    } finally {
      console.log(this.immobili);
    }
  }

}

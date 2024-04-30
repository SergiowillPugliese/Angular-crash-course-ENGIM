import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImmobiliDTO } from 'src/app/shared/model/immobili.model';
import { ImmobiliService } from 'src/app/shared/services/immobili.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  immobileSub!: Subscription;
  immobileSelezionato: ImmobiliDTO | null = null;
  selectedImmobileId!: number;

  constructor(private immobiliService: ImmobiliService) { }

  ngOnInit(): void {
    this.immobiliService.getImmobile(1).subscribe((immobile) => {
      this.immobiliService.setSelectedImmobile(immobile);
    });

    this.immobileSub = this.immobiliService.selectedImmobile$.subscribe(
      (selectedImmobile) => {
        this.immobileSelezionato = selectedImmobile;
        this.selectedImmobileId = selectedImmobile?.id || 0;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.immobileSub) {
      this.immobileSub.unsubscribe();
    }
  }

  selectedImmobileFromCards(immobile: ImmobiliDTO) {
    this.immobiliService.setSelectedImmobile(immobile);
    this.selectedImmobileId = immobile.id;
  }
}

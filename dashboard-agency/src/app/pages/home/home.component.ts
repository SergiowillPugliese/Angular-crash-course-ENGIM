import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpService, Responce } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  iMieiElementi!: Responce;

  constructor(private httpServ: HttpService) { }

  ngOnInit(): void {
    //this.httpServ.getElements()
    //.subscribe((res) => this.iMieiElementi = res);
    this.iMieiElementiDalService();
  }

   async iMieiElementiDalService() {
    try {
      this.iMieiElementi = await lastValueFrom(this.httpServ.getElements());
    } catch(e) {
      console.log(e);
    } finally {
      console.log(this.iMieiElementi.users);
    }
  } 
 
}

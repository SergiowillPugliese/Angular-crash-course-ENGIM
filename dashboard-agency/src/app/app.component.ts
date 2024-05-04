import { Component, OnInit } from '@angular/core';
import { HttpService } from './shared/service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard-agency';

  constructor(private httpServ: HttpService) { }

  ngOnInit() {
    //this.httpServ.getElements().subscribe((res) => console.log(res));
  }
}

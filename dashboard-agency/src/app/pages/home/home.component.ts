import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class Homecomponent implements AfterViewInit {
  @ViewChild('titolo') titolo: ElementRef | undefined;


  constructor() { }

  ngAfterViewInit() {
    console.log(this.titolo?.nativeElement.textContent);
  }

}

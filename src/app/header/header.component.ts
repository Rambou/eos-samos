import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const rootVar = window['loading_screen'];
    rootVar.finishing = true;
    /*const pleaseWait = window['pleaseWait'];
    pleaseWait.finish();*/
  }

}

import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    //$window.pleaseWait.finish();
    //console.log(window.document.body.plea.getElementById('loading_screen'))
  }

}

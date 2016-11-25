import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public aData;
  public tData;
  public oData;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get("assets/data/restaurant.json")
      .subscribe((data)=> {
        this.aData = data.json().athens;
        this.tData = data.json().thessaloniki;
        this.oData = data.json().other;
      });
  }

  ngAfterViewInit() {
    $('.parallax').parallax();
  }

}

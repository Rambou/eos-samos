import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  public distribute_data;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get("assets/data/distributors.json")
      .subscribe((data)=> {
        this.distribute_data = data.json();
      });
  }

  ngAfterViewInit() {
    $('.parallax').parallax();
  }
}

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.css']
})
export class UnionComponent implements OnInit {
  private sub: any;
  id: string;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id == 'vineyards') {
        // Preserve fragment from /results#top to /view#top
        this.router.navigate(['/union'], {fragment: 'vineyards', preserveFragment: true});
      }
      // In a real app: dispatch action to load the details here.
    });
  }


}

import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.parallax').parallax();
    Materialize.scrollFire(
      [{
        selector: '#news0',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news0')
        }
      }, {
        selector: '#news1',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news1')
        }
      }, {
        selector: '#news2',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news2')
        }
      }, {
        selector: '#news3',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news3')
        }
      }, {
        selector: '#news4',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news4')
        }
      }, {
        selector: '#news5',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news5')
        }
      }, {
        selector: '#news6',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news6')
        }
      }, {
        selector: '#news7',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news7')
        }
      }, {
        selector: '#news8',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news8')
        }
      }, {
        selector: '#news9',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news9')
        }
      }, {
        selector: '#news10',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news10')
        }
      }, {
        selector: '#news11',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news11')
        }
      }, {
        selector: '#news12',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news12')
        }
      }, {
        selector: '#news13',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news13')
        }
      }, {
        selector: '#news14',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news14')
        }
      }, {
        selector: '#news15',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news15')
        }
      }, {
        selector: '#news16',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news16')
        }
      }, {
        selector: '#news17',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news17')
        }
      }, {
        selector: '#news18',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news18')
        }
      }, {
        selector: '#news19',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news19')
        }
      }, {
        selector: '#news20',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news20')
        }
      }, {
        selector: '#news21',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news21')
        }
      }, {
        selector: '#news22',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news22')
        }
      }, {
        selector: '#news23',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news23')
        }
      }, {
        selector: '#news24',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news24')
        }
      }, {
        selector: '#news25',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news25')
        }
      }, {
        selector: '#news26',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news26')
        }
      }, {
        selector: '#news27',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news27')
        }
      }, {
        selector: '#news28',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news28')
        }
      }, {
        selector: '#news29',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news29')
        }
      }, {
        selector: '#news30',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news30')
        }
      }, {
        selector: '#news31',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news31')
        }
      }, {
        selector: '#news32',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news32')
        }
      }, {
        selector: '#news33',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news33')
        }
      }, {
        selector: '#news34',
        offset: 300,
        callback: function (el) {
          Materialize.showStaggeredList('#news34')
        }
      }]
    );
  }
}

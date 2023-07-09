import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(name) %>-dt',
  templateUrl: './<%= dasherize(name) %>-dt.component.html',
  styleUrls: ['./<%= dasherize(name) %>-dt.component.scss']
})
export class <%= classify(name) %>DtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

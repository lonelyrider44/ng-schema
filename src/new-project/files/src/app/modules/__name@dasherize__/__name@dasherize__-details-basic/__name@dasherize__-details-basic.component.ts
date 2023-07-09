import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { <%= classify(name) %> } from '../<%= dasherize(name) %>';
import { <%= classify(name) %>Service } from '../<%= dasherize(name) %>.service';

@Component({
  selector: 'app-<%= dasherize(name) %>-details-basic',
  templateUrl: './<%= dasherize(name) %>-details-basic.component.html',
  styleUrls: ['./<%= dasherize(name) %>-details-basic.component.scss']
})
export class <%= classify(name) %>DetailsBasicComponent implements OnInit {

  // public kampId: any = -1;
  // kamp: Kamp = null;
  constructor(private activatedRoute: ActivatedRoute, private <%= camelize(name) %>Service: <%= classify(name) %>Service) { }

  ngOnInit(): void {

    // this.kampId = this.activatedRoute.snapshot.parent.params?.kampId
    // if( this.kampId ){
    //   this.kampService.find(this.kampId).subscribe(kamp => {
    //     // console.log(kamp);
    //     this.kamp = kamp;
    //   })
    // }
  }

}

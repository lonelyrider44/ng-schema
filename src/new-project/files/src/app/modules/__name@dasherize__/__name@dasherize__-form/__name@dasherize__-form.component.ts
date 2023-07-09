import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from '../../shared/form';
import { RouterExtService } from '../../shared/router-ext.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { <%= classify(name) %>, <%= camelize(name) %>FormGroup, new<%= classify(name) %> } from '../<%= name %>';
import { <%= classify(name) %>Service } from '../<%= name %>.service';

@Component({
  selector: 'app-<%= dasherize(name) %>-form',
  templateUrl: './<%= dasherize(name) %>-form.component.html',
  styleUrls: ['./<%= dasherize(name) %>-form.component.scss']
})
export class <%= classify(name)%>FormComponent extends Form implements OnInit {

  <%= camelize(name) %>: <%= classify(name) %> = new<%= classify(name) %>();
  <%= camelize(name) %>Form: FormGroup;

  constructor(
    public override fb: FormBuilder,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override routerExt: RouterExtService,
    protected override _snackBar: MatSnackBar,
    public <%= camelize(name) %>Service: <%= classify(name) %>Service,
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);
    // this.obj = new<%= classify(name) %>();
    this.form = this.<%= camelize(name) %>Form = <%= name %>FormGroup(this.fb, this.<%= camelize(name) %>);
    this.service = this.<%= camelize(name) %>Service;
    // this.<%= name %>Form = <%= name %>FormGroup(this.fb, this.<%= name %>);
  }

  ngOnInit(): void {
    this.loadFromUrl();
  }

  ngAfterViewInit() {
    if (this.action_create) {
      //
    }
  }

  override loadFromUrl() {
    super.loadFromUrl();
    
    this.activatedRoute.data.subscribe(({ <%= camelize(name) %> }) => {
        if(!<%=camelize(name) %>) return;
        this.<%= name %> = <%= name %>
    })
  }

  override get obj() { return this.<%= camelize(name) %> };

}
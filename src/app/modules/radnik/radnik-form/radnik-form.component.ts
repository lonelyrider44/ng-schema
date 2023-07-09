import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from 'app/modules/shared/form';
import { RouterExtService } from 'app/modules/shared/router-ext.service';
import { Radnik, RadnikFormGroup } from '../radnik';
import { RadnikService } from '../radnik.service';

@Component({
  selector: 'app-radnik-form',
  templateUrl: './radnik-form.component.html',
  styleUrls: ['./radnik-form.component.scss']
})
export class RadnikFormComponent extends Form implements OnInit {
  constructor(
    public fb: FormBuilder,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected routerExt: RouterExtService,
    public radnikService: RadnikService,
  ) {
    super(fb, router, activatedRoute, routerExt, _snackBar);
    // this.obj = newRadnik();
    this.form = this.radnikForm = radnikFormGroup(this.fb, this.radnik);
    this.service = this.radnikService;
    // this.radnikForm = radnikFormGroup(this.fb, this.radnik);
  }

  ngOnInit(): void {
    this.loadFromUrl();
  }

  ngAfterViewInit() {
    if (this.action_create) {
      //
    }
  }

  loadFromUrl() {
    super.loadFromUrl();
    
    this.activatedRoute.data.subscribe(({ radnik }) => {
        if(!radnik) return;
        this.radnik = radnik
    })
  }

  get obj() { return this.radnik };

}
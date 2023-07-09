import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { <%= classify(name) %>Service } from '../<%= dasherize(name) %>.service';

@Component({
  selector: 'app-<%= dasherize(name) %>-index',
  templateUrl: './<%= dasherize(name) %>-index.component.html',
  styleUrls: ['./<%= dasherize(name) %>-index.component.scss']
})
export class <%= classify(name) %>IndexComponent implements OnInit {

  @ViewChild('dataTable<%= classify(name) %>') table;
  dataTable: any;


  constructor(private router: Router, private <%= camelize(name) %>Service: <%= classify(name)%>Service) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      serverSide: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.<%= camelize(name) %>Service.datatable(dataTablesParameters).subscribe((data: any) => {
          callback({
            recordsTotal: data.recordsTotal,
            recordsFiltered: data.recordsFiltered,
            data: data.data
          });
        });
      },
      responsive: true,
      // "lengthChange": false, 
      autoWidth: false,
      // "buttons": {
      //   "buttons": [{
      //     "text": '<i class="fas fa-plus"></i>',
      //     "action": function (e, dt, node, config) {
      //       that.router.navigateByUrl(`/korisnici/create`)
      //     },
      //     "className": "btn btn-primary"
      //   } ],
      //   dom: {
      //     button: {
      //       className: 'btn'
      //     }
      //   }
      // },

      dom: 'lfrtip',
      columns: [
        { title: 'ID', data: 'id', name: 'id' },
        { title: 'Naziv', data: 'naziv', name: 'naziv' },
        { title: 'Akcije', data: 'action', name: 'action', width: "120px", className: "dt-center"},
      ],
      drawCallback: function () {
        // $('.btnShow<%= classify(name) %>').on('click', function (event) {
        //   that.router.navigateByUrl(`/admin/<%= dasherize(name) %>/${$(this).data('id')}`)
        // })
        // $('.btnEdit<%= classify(name) %>').on('click', function (event) {
        //   that.router.navigateByUrl(`/admin/<%= dasherize(name) %>/${$(this).data('id')}/izmena`)
        // })
        // $('.btnDelete<%= classify(name) %>').on('click', function (event) {
        //   that.router.navigateByUrl(`/admin/<%= dasherize(name) %>/${$(this).data('id')}/brisanje`)
        // })
      },
      language : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_<%= underscore(name) %>_wrapper .col-md-6:eq(0)');
    // })
  }

}

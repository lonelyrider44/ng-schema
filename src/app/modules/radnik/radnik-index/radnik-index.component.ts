import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { RadnikService } from '../radnik.service';

@Component({
  selector: 'app-radnik-index',
  templateUrl: './radnik-index.component.html',
  styleUrls: ['./radnik-index.component.scss']
})
export class RadnikIndexComponent implements OnInit {

  @ViewChild('dataTableRadnik') table;
  dataTable: any;


  constructor(private router: Router, private radnikService: RadnikService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      serverSide: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.radnikService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        // $('.btnShowRadnik').on('click', function (event) {
        //   that.router.navigateByUrl(`/admin/radnik/${$(this).data('id')}`)
        // })
        // $('.btnEditRadnik').on('click', function (event) {
        //   that.router.navigateByUrl(`/admin/radnik/${$(this).data('id')}/izmena`)
        // })
        // $('.btnDeleteRadnik').on('click', function (event) {
        //   that.router.navigateByUrl(`/admin/radnik/${$(this).data('id')}/brisanje`)
        // })
      },
      language : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_radnik_wrapper .col-md-6:eq(0)');
    // })
  }

}

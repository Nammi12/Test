import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { appComponentService } from './app.component.service';
import { GridOptions } from 'ag-grid';
import { Directive } from '@angular/core';
import wsModels = ProductPricing.webservices.models;
import { Note } from './note.model';
import { LOCALE_ID } from '@angular/core';



// import { environment } from '@env';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
  
  @Input() note: Note;
  myNumber: number=121;
  private gridOptions: GridOptions;
  private date: Date;
  public showGrid: boolean;
  public rowData: any[];
  private columnDefs: any[];
  public rowCount: string;
  private conversationlogService = new appComponentService();
  public addNotes = this.conversationlogService.conversationlog();


  param = { value: 'Nammi!!' };

  
  constructor(private translate: TranslateService) {

    this.gridOptions = <GridOptions>{};
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('de');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    this.ngOnInit();
  }
  

  ngOnInit() {
    var number = 123456;
    this.date = new Date;
    let dd = this.date.getDate().toString();
    let mm = this.date.getMonth().toString();
    let yy = this.date.getFullYear().toString();
    let result: string;
     result = [yy, '-', mm, '-', dd].join('');
    this.InitializeGrid();
  }


  public InitializeGrid() {
    debugger;
    this.gridOptions.columnDefs = [
      {
        headerName: 'conversationTime',
        field: 'Date',
        width: 200,


        //cellFilter: 'date:\'MM/dd/yyyy\'',
        //enableSorting: true
      },
      {
        headerName: "talkedTo",
        field: "id",
        width: 199
      },
      {
        headerName: "notes",
        field: "value",
        width: 199
        // cellRendererFramework: RedComponentComponent,
        // width: 100
      },

    ];
    this.gridOptions.rowData = [];
    this.date = new Date;
    let dd = this.date.getDate().toString();
    let mm = this.date.getMonth().toString();
    let yy = this.date.getFullYear().toString();
    let result: string;

    result = [yy, '-', mm, '-', dd].join('');
    this.gridOptions.rowData = [
      { Date: result, id: 5, value: 52 },
      { Date: '12-11-78', id: 10, value: 15 },
      { Date: 23, id: this.addNotes.talkedTo, value: 20 },
      { Date: 23, id: this.addNotes.talkedTo, value: 20 },
      { Date: 23, id: this.addNotes.talkedTo, value: 20 },
      { Date: 23, id: 15, value: 20 },
      { Date: 23, id: 15, value: 20 },
      { Date: 23, id: 15, value: 20 }

    ]
    this.gridOptions.enableFilter = true;
    this.gridOptions.enableSorting = true;
    this.gridOptions.pagination = true;
    this.gridOptions.paginationPageSize = 5;
    // this.gridOptions.api.setRowData(this.gridOptions.rowData)

  }

  private createColumnDefs() {
    this.columnDefs = [

      { headerName: "Make", field: "make", colWidth: 150, cellHeight: 20, pinned: true },
      { headerName: "Model", field: "model", colWidth: 150, cellHeight: 20, pinned: true },
      { headerName: "Price", field: "price", colWidth: 150, cellHeight: 20, pinned: true }
    ];
    this.gridOptions.columnDefs = this.columnDefs;
  }
  private createRowData() {
    var rowData: any[] = [];
    rowData.push
      ({
        make: "Toyota",
        model: "Celica",
        price: 35000
      });
    // { make: "Ford", model: "Mondeo", price: 32000 },
    // { make: "Porsche", model: "Boxter", price: 72000 });
    this.rowData = rowData;
    this.gridOptions.rowData = this.rowData;
  }

  ClearAllFeilds() {
    //this.addNotes[0].talkedTo='hi'
    alert(this.addNotes.talkedTo)
  }

  AddFeildVAlues() {
    alert(this.addNotes.talkedTo)
    this.InitializeGrid();

    alert("123" + this.addNotes.talkedTo)
  }


}
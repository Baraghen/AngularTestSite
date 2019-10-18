import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {


  displayedColumns: string[] = ['person', 'goals', 'labels', 'engagement', 'lastSeen'];
  dataSource;

  
  
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getTable().subscribe(
      data => {
        this.dataSource = data;
      },
      error => {
        console.log(error);
      },
      () => {
        
      }
    )
  }

}

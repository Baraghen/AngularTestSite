import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private data: DataService) { }

  albums;

  ngOnInit() {
    this.data.getAlbums().subscribe(data =>{
      this.albums = data
    }
  );
  }

}

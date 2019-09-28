import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  arr: any;
  constructor(private apiDataService: ApiDataService) { 
    this.arr = this.apiDataService.getData();
  }

  ngOnInit() {
  }

}

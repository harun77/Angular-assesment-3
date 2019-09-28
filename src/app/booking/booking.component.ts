import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  arr: any;
  constructor(private apiDataService: ApiDataService) { 
    this.arr = this.apiDataService.getData();
  }

  ngOnInit() {
  }

}

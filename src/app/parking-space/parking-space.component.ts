import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parking-space',
  templateUrl: './parking-space.component.html',
  styleUrls: ['./parking-space.component.css']
})
export class ParkingSpaceComponent implements OnInit {

  @Input() arr: any;
  
  selectedItem: any;
  vehicleNumber: any;
  selectedFile: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  select(item: any) {
    this.selectedItem = item;
  }

  book() {
    let index = this.arr.findIndex(e => e == this.selectedItem);
    this.arr[index].vehicleNumber = this.vehicleNumber;
    this.arr[index].isavail = 0;
    this.vehicleNumber = '';
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    let url = '';
    this.http.post(url, uploadData)
      .subscribe(res => {
        console.log(res);
    });
  }
}

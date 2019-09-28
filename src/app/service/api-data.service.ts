import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  arr = [
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$100",
      "isavail": 1
    },
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$120",
      "isavail": 0
    },
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$130",
      "isavail": 1
    },
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$140",
      "isavail": 0
    },
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$150",
      "isavail": 1
    },
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$100",
      "isavail": 1
    },
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$120",
      "isavail": 0
    },
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$130",
      "isavail": 1
    },
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$140",
      "isavail": 0
    },
    {
      "vehicleNumber": null,
      "vehicleImg": null,
      "price": "$150",
      "isavail": 1
    }
  ];

  constructor() { }

  getData() {
    return this.arr;
  }
}

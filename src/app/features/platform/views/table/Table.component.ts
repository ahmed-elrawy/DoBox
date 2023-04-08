import { Component , OnInit} from '@angular/core';
interface Car {
  id: Number,
  name: String,
  company: String,
  number: String,
  manufacturedYear: Number,
  kmDriven: Number,
  price: String,
  rating: Number
}
@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'] 
})

export class TableComponent implements OnInit {


  cars: Car[] = [];
  
  ngOnInit() {
      this.cars = [
          {
              id: 1,
              name: "Creta",
              company: "Hyundai",
              number: "MH01BHXX01",
              manufacturedYear: 2016,
              kmDriven: 23456,
              price: "11 Lakhs",
              rating: 4.0
          },
          {
              id: 2,
              name: "Audi Q7",
              company: "Audi",
              number: "UP76APXXX2",
              manufacturedYear: 2006,
              kmDriven: 11342,
              price: "90.2 Lakhs",
              rating: 4.7
          },
          {
              id: 3,
              name: "Venue",
              company: "Hyundai",
              number: "MH11AHXX01",
              manufacturedYear: 2019,
              kmDriven: 45456,
              price: "7.8 Lakhs",
              rating: 3.5
          },
          {
              id: 4,
              name: "Audi A4",
              company: "Hyundai",
              number: "BR01SD1XX0",
              manufacturedYear: 1997,
              kmDriven: 18446,
              price: "49.4 Lakhs",
              rating: 4.5
          },
          {
              id: 5,
              name: "Audi e-tron",
              company: "Audi",
              number: "MP11BPXX00",
              manufacturedYear: 2020,
              kmDriven: 9901,
              price: "1.2 Crore",
              rating: 4.9
          },
          {
              id: 6,
              name: "Alto",
              company: "Maruti Suzuki",
              number: "MP14BPXX99",
              manufacturedYear: 2008,
              kmDriven: 98901,
              price: "4 Lakhs",
              rating: 3.2
          },
      ];
  }
}

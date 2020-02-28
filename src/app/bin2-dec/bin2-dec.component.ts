import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bin2-dec',
  templateUrl: './bin2-dec.component.html',
  styleUrls: ['./bin2-dec.component.scss']
})
export class Bin2DecComponent implements OnInit {


  public binaryNumber: string = "";

  public error: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get decimalNumber() {

    let _notBinaryNumber = new RegExp('[^0,1]');

    if (_notBinaryNumber.test(this.binaryNumber)) this.error = true;

    else {
      this.error = false;

      let _decimalNumber = 0;

      let counter = 1;

      for (let i = this.binaryNumber.length; i > 0; i--) {
        _decimalNumber += parseInt(this.binaryNumber[i - 1]) * counter;
        counter *= 2;
      }
      
      return _decimalNumber;

    }
  }


}

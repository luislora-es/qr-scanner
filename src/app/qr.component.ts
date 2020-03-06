import { Component, Input, ViewChild, ElementRef, OnInit } from "@angular/core";
import QrScanner from 'qr-scanner';
import QrScannerWorkerPath from 'qr-scanner/qr-scanner-worker.min.js';
QrScanner.WORKER_PATH = QrScannerWorkerPath;

@Component({
  selector: "qr-component",
  template: `
    Video
    <video #qrvideo muted></video>
    Result {{ result }}
  `
})
export class QrComponent implements OnInit {
  @ViewChild('qrvideo', {static: false}) videoElem: any;
  result: any;

  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {   
    console.log('this.videoElement', this.videoElem);
    const qrScanner = new QrScanner(this.videoElem.nativeElement, result => {
      this.result = result;
    });
    qrScanner.start();
  }
}

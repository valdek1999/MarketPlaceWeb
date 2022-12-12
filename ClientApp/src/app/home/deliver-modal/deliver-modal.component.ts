import {Component, Inject, OnInit} from '@angular/core';
import {ModalDeliver} from "../../counter/counter.component";
import {Dialog, DIALOG_DATA} from '@angular/cdk/dialog';
@Component({
  selector: 'app-deliver-modal',
  templateUrl: './deliver-modal.component.html',
  styleUrls: ['./deliver-modal.component.css']
})
export class DeliverModalComponent implements OnInit {

  constructor(@Inject(DIALOG_DATA) public data: ModalDeliver) {
  }

  ngOnInit(): void {
  }

}

import {Component, Inject, OnInit} from '@angular/core';
import {ModalDeliver} from "../../products-in-stock-page/counter.component";
import {Dialog, DIALOG_DATA} from '@angular/cdk/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver-modal',
  templateUrl: './deliver-modal.component.html',
  styleUrls: ['./deliver-modal.component.css']
})
export class DeliverModalComponent implements OnInit {

  constructor(@Inject(DIALOG_DATA) public data: ModalDeliver, private router: Router) {
  }

  ngOnInit(): void {
  }
}

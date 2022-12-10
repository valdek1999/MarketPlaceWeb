import {Component, Input, OnInit} from '@angular/core';
import {RepairParts} from "../market.service";

@Component({
  selector: 'app-product-repair',
  templateUrl: './product-repair.component.html',
  styleUrls: ['./product-repair.component.css']
})
export class ProductRepairComponent implements OnInit {
  @Input() repairParts: RepairParts | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}

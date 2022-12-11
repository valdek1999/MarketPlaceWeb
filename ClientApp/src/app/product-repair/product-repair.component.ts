import {Component, Input, OnInit} from '@angular/core';
import {RepairParts} from "../market.service";
import {MatIconModule} from  "@angular/material/icon"
import {MatButtonModule} from  "@angular/material/button"
import {MatButton} from  "@angular/material/button"
@Component({
  selector: 'app-product-repair',
  templateUrl: './product-repair.component.html',
  styleUrls: ['./product-repair.component.css']
})
export class ProductRepairComponent implements OnInit {
  @Input() repairParts!: RepairParts;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}

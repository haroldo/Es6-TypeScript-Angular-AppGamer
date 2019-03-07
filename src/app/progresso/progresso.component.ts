import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public progresso:number = 0

  constructor() { }

  ngOnInit() {
  }

}

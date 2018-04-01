import {Component, OnInit} from '@angular/core';
import {ServiceXService} from '../../../core/services/service-x.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  constructor(public serviceX: ServiceXService) {
  }

  ngOnInit() {
  }

}

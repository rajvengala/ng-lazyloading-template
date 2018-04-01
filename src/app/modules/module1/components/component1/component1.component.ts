import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../../services/service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor(public service1: Service1Service) { }

  ngOnInit() {
  }

}

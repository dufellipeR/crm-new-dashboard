import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funil',
  templateUrl: './funil.component.html',
  styleUrls: ['./funil.component.css']
})
export class FunilComponent implements OnInit {

  @Input() showSidebar: boolean = false;
  
  @Output() situationSidebar = new EventEmitter();

  onClick() {
    this.showSidebar = !this.showSidebar;
    this.situationSidebar.emit({ situation: this.showSidebar })
  }

  ngOnInit() {
  
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }

}

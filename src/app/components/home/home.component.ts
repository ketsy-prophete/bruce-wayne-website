import { Component } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  positionOptions: TooltipPosition[] = ['right'];
  position = new FormControl(this.positionOptions[0]);
}
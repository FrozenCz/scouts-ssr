import { Component } from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-shared-list',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterOutlet
  ],
  templateUrl: './shared-list.component.html',
  styleUrl: './shared-list.component.scss'
})
export class SharedListComponent {

}

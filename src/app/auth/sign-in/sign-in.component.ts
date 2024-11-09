import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatButtonModule, MatSlideToggleModule, MatIconModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}

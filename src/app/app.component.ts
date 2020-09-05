import { Component } from '@angular/core';
import {AuthService} from './admin/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memoire-app';

  constructor(private authService: AuthService){

  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  navToMichaelWMason95(): void {
    location.href = 'http://michaelwmason95.com';
  }

  route(location: string) {
    this.router.navigate([location]);
  }
}

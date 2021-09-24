import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  screenSize$: Observable<string>;

  constructor(private router: Router, private mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.screenSize$ = this.mediaObserver.asObservable().pipe(
      map((obs) => obs[0].mqAlias),
      tap(console.log)
    );
  }

  navToMichaelWMason95(): void {
    location.href = 'http://michaelwmason95.com';
  }

  route(location: string) {
    this.router.navigate([location]);
  }
}

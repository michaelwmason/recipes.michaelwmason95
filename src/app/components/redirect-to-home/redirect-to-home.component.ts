import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-to-home',
  templateUrl: './redirect-to-home.component.html',
  styleUrls: ['./redirect-to-home.component.scss'],
})
export class RedirectToHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['']);
  }
}

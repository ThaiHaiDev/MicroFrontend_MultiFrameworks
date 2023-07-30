import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-remote-root',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements
  }
}

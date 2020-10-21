import { Component, OnInit } from '@angular/core';
import { AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  api: string | undefined;

  constructor(private config: AppConfig) {}

  ngOnInit(): void {
    this.api = this.config.api;
  }
}

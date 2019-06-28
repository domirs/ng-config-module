import { Component } from '@angular/core';
import { AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  api: string;

  constructor(private config: AppConfig) {}

  ngOnInit() {
    this.api = this.config.api;
  }
}
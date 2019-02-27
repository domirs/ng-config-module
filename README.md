# ng-config-module [![Build Status](https://travis-ci.org/domirs/ng-config-module.svg?branch=master)](https://travis-ci.org/domirs/ng-config-module) 

Provide configuration options through meta tags.

## Installation

First you need to install the npm module:

`npm install ng-config-module`

## Usage

### Import the `ConfigModule`

```angular2
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule, ConfigService } from 'ng-config-module';
import { AppConfig } from './app-config';

@NgModule({
  imports: [
    BrowserModule,
    ConfigModule
  ],
  providers: [
    {
      provide: AppConfig,
      useExisting: ConfigService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Create `AppConfig`
```
export class AppConfig {
  api: string;
}
```

### Add configurations to `index.html`
```
...
<head>
  <meta charset="utf-8">
  <title>NgConfigModule</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <meta name="config" property="api" content="https://api.github.com">
</head>
...
```

### Use the configuration
```
import { Component, OnInit } from '@angular/core';
import { AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  api: string;

  constructor(private config: AppConfig) { }

  ngOnInit() {
    this.api = this.config.api;
  }
}
```

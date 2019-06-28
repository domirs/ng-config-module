import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule, ConfigService } from 'ng-config-module';
import { AppConfig } from './app-config';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ConfigModule],
  providers: [
    {
      provide: AppConfig,
      useExisting: ConfigService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

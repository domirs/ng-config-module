import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  [key: string]: string;

  constructor(meta: Meta) {
    meta.getTags('name=config').forEach(metaElem => {
      this[metaElem.getAttribute('property')] = metaElem.content;
    });
  }
}

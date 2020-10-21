import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  [key: string]: string;

  constructor(meta: Meta) {
    meta.getTags('name=config').forEach((metaElem) => {
      const property = metaElem.getAttribute('property');
      if (property) {
        this[property] = metaElem.content;
      }
    });
  }
}

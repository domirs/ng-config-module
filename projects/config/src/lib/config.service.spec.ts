import { TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let meta: Meta;
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    meta = TestBed.inject(Meta);
    const metaMock = {
      content: 'https://api.github.com',
      getAttribute: property => 'api'
    } as HTMLMetaElement;
    spyOn(meta, 'getTags').and.returnValue([metaMock]);

    service = TestBed.inject(ConfigService);
  });

  it('should collect all meta config tags', () => {
    expect(meta.getTags).toHaveBeenCalledWith('name=config');
  });

  it('should collect config information', () => {
    expect(service.api).toEqual('https://api.github.com');
  });
});

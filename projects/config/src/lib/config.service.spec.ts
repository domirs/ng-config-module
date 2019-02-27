import { TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should collect all meta config tags', () => {
    const meta = TestBed.get(Meta);
    spyOn(meta, 'getTags').and.callThrough();

    const service: ConfigService = TestBed.get(ConfigService);

    expect(meta.getTags).toHaveBeenCalledWith('name=config');
  });

  it('should collect config information', () => {
    const metaMock = {
      content: 'https://api.github.com',
      getAttribute: (property) => 'api'
    };
    const meta = TestBed.get(Meta);
    spyOn(meta, 'getTags').and.returnValue([metaMock]);

    const service: ConfigService = TestBed.get(ConfigService);

    expect(service.api).toEqual('https://api.github.com');
  });
});

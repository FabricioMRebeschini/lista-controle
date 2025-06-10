import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { listaResolver } from './lista.resolver';

describe('listaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => listaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

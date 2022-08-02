import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MiPropiaDirective } from './mi-propia.directive';

describe('MiPropiaDirective', () => {

  let element: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ElementRef, useValue: { nativeElement: {} }},
        Renderer2
      ]
    });
    element = TestBed.inject(ElementRef);
    renderer = TestBed.inject(Renderer2);
  });

  it('should create an instance', () => {
    const directive = new MiPropiaDirective(element, renderer);
    expect(directive).toBeTruthy();
  });
});

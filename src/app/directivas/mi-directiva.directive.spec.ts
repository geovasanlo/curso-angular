import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MiDirectivaDirective } from './mi-directiva.directive';

describe('MiDirectivaDirective', () => {

  let element: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ElementRef, useValue: { nativeElement: {} }},
        {provide: Renderer2, useValue: {setStyle: () => {}}}
      ]
    });
    element = TestBed.inject(ElementRef);
    renderer = TestBed.inject(Renderer2);
  });

  it('should create an instance', () => {
    const directive = new MiDirectivaDirective(element, renderer);
    expect(directive).toBeTruthy();
  });
});

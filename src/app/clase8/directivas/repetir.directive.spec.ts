import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RepetirDirective } from './repetir.directive';

describe('RepetirDirective', () => {

  let templateRef: TemplateRef<any>;
  let viewContainerRef: ViewContainerRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TemplateRef,
        ViewContainerRef
      ]
    });
    templateRef = TestBed.inject(TemplateRef);
    viewContainerRef = TestBed.inject(ViewContainerRef);
  });

  it('should create an instance', () => {
    const directive = new RepetirDirective(templateRef, viewContainerRef);
    expect(directive).toBeTruthy();
  });
});

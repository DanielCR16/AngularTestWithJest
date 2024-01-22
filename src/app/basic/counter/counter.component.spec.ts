import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled:HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled=fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should match with the snapshot',()=>{
    expect(compiled).toMatchSnapshot();
  });

  it('should increase counter by the argument in the function icreaseBy',()=>{
  component.increaseBy(1);
    expect(component.counter).toBe(11);
  });
  it('click in the button + should increment the var counter',()=>{
    const buttons =compiled.querySelectorAll('button');
    buttons[0].click();
      expect(component.counter).toBe(11);
    });
    it('click in the button - should increment the var counter',()=>{
      const buttons =compiled.querySelectorAll('button');
      buttons[1].click();
        expect(component.counter).toBe(9);
      });

      it('cambiar el counter debe actualiza la etiqueta h1',()=>{
        component.increaseBy(10);
        fixture.detectChanges();
        const h1=compiled.querySelector('h1');
        expect(h1?.textContent).toContain('20');
        });
});

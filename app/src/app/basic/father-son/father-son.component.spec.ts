import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from './father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compile:HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile=fixture.nativeElement;
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('debe hacer match con el snapshot',()=>{
    expect(compile).toMatchSnapshot();
  });
  it('no debe aparecer botones si no hay  cliente',()=>{
    const buttons=compile.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });
  it(' debe aparecer 2 botones si hay  cliente',()=>{
    component.client={id:1,name:"Daniel"};
    fixture.detectChanges();
    const buttons=compile.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('si hay cliente debe hacer match con el snapshot',()=>{
    component.client={id:1,name:"Daniel"};
    fixture.detectChanges();
    expect(compile).toMatchSnapshot();
  });
  it('debe de emitir onDeleteClient con el boton de eliminar',()=>{

    component.client={id:1,name:"Daniel"};
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient,'emit');

    const btnDelete=compile.querySelector('[data-test=btn-delete]')
    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  it('debe de emitir onClientUpdate con el boton de cambiar ID',()=>{

    component.client={id:1,name:"Daniel"};
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdating,'emit');

    const btnUpdate=compile.querySelector('[data-test=btn-update]');
    btnUpdate?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdating.emit).toHaveBeenCalledWith(
      {id:10,
       name:"Daniel"
    });
  });
it('deben emitir onChangeClient con el ID especificado SI hay un cliente',()=>{
  jest.spyOn(component.onClientUpdating,'emit');
  component.onChange(10);
  expect(component.onClientUpdating.emit).not.toHaveBeenCalled()

  component.client={id:1,name:"Daniel"};
  fixture.detectChanges();
  component.onChange(100);
  expect(component.onClientUpdating.emit).toHaveBeenCalledWith(
    {id:100,
     name:"Daniel"
  });
});


});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from './father.component';
import { FatherSonComponent } from '../father-son/father-son.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compile:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherComponent,FatherSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile=fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoul be match with the snapshot',()=>{
    expect(compile).toMatchSnapshot();
  });
  it('debe de establecer el cliente con el nombre indicado',()=>{
    component.onSetClient('Daniel');
    fixture.detectChanges();
    const codeTag = compile.querySelector('.mt-2');

    expect(codeTag?.textContent).toContain('"name"');
    expect(codeTag?.textContent).toContain('"Daniel"');
  });

  it('al llamar onSetClient debe crear el cliente',()=>{
    expect(component.client).toEqual(undefined);
    component.onSetClient('Raul');
    expect(component.client).toEqual({ id:1,name:'Raul'})
  });

  it('debe de borrar el cliente si se emite onDeleteClient(hijo) ',()=>{
    component.client={id:1,name:'Eduardo'};
    fixture.detectChanges();
    const sonDebugElement=fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent :FatherSonComponent  = sonDebugElement.componentInstance;
    sonComponent.onDeleteClient.emit();
    expect(component.client).toBe(undefined);
  });

  it('debe de actualizar el cliente con onClientUpdated ',()=>{
    component.client={id:1,name:'Eduardo'};
    fixture.detectChanges();

    //SE PUEDE ELEVAR PARA NO REPETIR CODIGO
    const sonDebugElement=fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent :FatherSonComponent  = sonDebugElement.componentInstance;
    sonComponent.onClientUpdating.emit({id:10,name:'Daniel'});
    expect(component.client).toEqual({id:10,name:'Daniel'});
  });
});

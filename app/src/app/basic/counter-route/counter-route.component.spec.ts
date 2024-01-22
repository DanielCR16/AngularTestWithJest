import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouteComponent } from './counter-route.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ CounterRouteComponent ],
  //     imports:[RouterTestingModule]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(CounterRouteComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create counter-route', () => {
  //   expect(component).toBeTruthy();
  // });

  it('debe tener el valor inicial en 0', async() => {

    await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.counter).toBe(0);

  });

  it('debe tener el valor inicial en 100 en la ruta /counter/100', async() => {
//PROBANDO NO USAR EL IMPORT SINO UN MOCK
const mockActivatedRoute = {
  snapshot:{
    paramMap:{
      get(param:string){
        return (param=="number")?'100':undefined;
      }
    }
  }
}
    await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      providers:[
        {provide:ActivatedRoute,useValue:mockActivatedRoute}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.counter).toBe(100);

  });

  it('debe tener el valor 10 en 100 en la ruta counter/100xdd', async() => {
    //PROBANDO NO USAR EL IMPORT SINO UN MOCK
    const mockActivatedRoute = {
      snapshot:{
        paramMap:{
          get(param:string){
            return (param=="number")?'100xdd':undefined;
          }
        }
      }
    }
        await TestBed.configureTestingModule({
          declarations: [ CounterRouteComponent ],
          providers:[
            {provide:ActivatedRoute,useValue:mockActivatedRoute}
          ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(CounterRouteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.counter).toBe(10);

      });
});

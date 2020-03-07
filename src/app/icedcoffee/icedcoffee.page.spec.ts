import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcedcoffeePage } from './icedcoffee.page';

describe('IcedcoffeePage', () => {
  let component: IcedcoffeePage;
  let fixture: ComponentFixture<IcedcoffeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcedcoffeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcedcoffeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

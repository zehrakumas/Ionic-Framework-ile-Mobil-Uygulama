import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EiskaffeePage } from './eiskaffee.page';

describe('EiskaffeePage', () => {
  let component: EiskaffeePage;
  let fixture: ComponentFixture<EiskaffeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EiskaffeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EiskaffeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

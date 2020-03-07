import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KahvebirPage } from './kahvebir.page';

describe('KahvebirPage', () => {
  let component: KahvebirPage;
  let fixture: ComponentFixture<KahvebirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahvebirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KahvebirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

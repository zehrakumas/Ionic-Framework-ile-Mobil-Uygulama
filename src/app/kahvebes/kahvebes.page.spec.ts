import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KahvebesPage } from './kahvebes.page';

describe('KahvebesPage', () => {
  let component: KahvebesPage;
  let fixture: ComponentFixture<KahvebesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahvebesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KahvebesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

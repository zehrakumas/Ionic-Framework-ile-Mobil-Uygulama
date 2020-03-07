import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmericanoPage } from './americano.page';

describe('AmericanoPage', () => {
  let component: AmericanoPage;
  let fixture: ComponentFixture<AmericanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmericanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

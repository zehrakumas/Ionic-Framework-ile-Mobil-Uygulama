import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TurkkahvesiPage } from './turkkahvesi.page';

describe('TurkkahvesiPage', () => {
  let component: TurkkahvesiPage;
  let fixture: ComponentFixture<TurkkahvesiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkkahvesiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TurkkahvesiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

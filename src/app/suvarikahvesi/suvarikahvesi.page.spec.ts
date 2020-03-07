import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuvarikahvesiPage } from './suvarikahvesi.page';

describe('SuvarikahvesiPage', () => {
  let component: SuvarikahvesiPage;
  let fixture: ComponentFixture<SuvarikahvesiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuvarikahvesiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuvarikahvesiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

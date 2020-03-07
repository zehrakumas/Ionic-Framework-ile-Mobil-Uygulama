import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CappucinoPage } from './cappucino.page';

describe('CappucinoPage', () => {
  let component: CappucinoPage;
  let fixture: ComponentFixture<CappucinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CappucinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CappucinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

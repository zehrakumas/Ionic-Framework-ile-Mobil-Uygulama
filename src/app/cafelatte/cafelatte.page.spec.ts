import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CafelattePage } from './cafelatte.page';

describe('CafelattePage', () => {
  let component: CafelattePage;
  let fixture: ComponentFixture<CafelattePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafelattePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CafelattePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

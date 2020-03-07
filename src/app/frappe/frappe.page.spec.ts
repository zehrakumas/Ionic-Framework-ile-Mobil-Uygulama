import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrappePage } from './frappe.page';

describe('FrappePage', () => {
  let component: FrappePage;
  let fixture: ComponentFixture<FrappePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrappePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrappePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AffogatoPage } from './affogato.page';

describe('AffogatoPage', () => {
  let component: AffogatoPage;
  let fixture: ComponentFixture<AffogatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffogatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AffogatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

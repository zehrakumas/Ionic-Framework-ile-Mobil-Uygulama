import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KahveucPage } from './kahveuc.page';

describe('KahveucPage', () => {
  let component: KahveucPage;
  let fixture: ComponentFixture<KahveucPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahveucPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KahveucPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

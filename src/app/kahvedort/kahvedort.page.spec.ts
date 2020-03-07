import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KahvedortPage } from './kahvedort.page';

describe('KahvedortPage', () => {
  let component: KahvedortPage;
  let fixture: ComponentFixture<KahvedortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahvedortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KahvedortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

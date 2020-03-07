import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LungoPage } from './lungo.page';

describe('LungoPage', () => {
  let component: LungoPage;
  let fixture: ComponentFixture<LungoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LungoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LungoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

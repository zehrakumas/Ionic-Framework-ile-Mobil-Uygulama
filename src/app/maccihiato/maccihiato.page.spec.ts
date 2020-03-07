import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaccihiatoPage } from './maccihiato.page';

describe('MaccihiatoPage', () => {
  let component: MaccihiatoPage;
  let fixture: ComponentFixture<MaccihiatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaccihiatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaccihiatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

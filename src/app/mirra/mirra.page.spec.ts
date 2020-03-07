import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MirraPage } from './mirra.page';

describe('MirraPage', () => {
  let component: MirraPage;
  let fixture: ComponentFixture<MirraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MirraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

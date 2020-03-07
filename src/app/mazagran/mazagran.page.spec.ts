import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MazagranPage } from './mazagran.page';

describe('MazagranPage', () => {
  let component: MazagranPage;
  let fixture: ComponentFixture<MazagranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazagranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MazagranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

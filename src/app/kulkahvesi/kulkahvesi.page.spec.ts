import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KulkahvesiPage } from './kulkahvesi.page';

describe('KulkahvesiPage', () => {
  let component: KulkahvesiPage;
  let fixture: ComponentFixture<KulkahvesiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KulkahvesiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KulkahvesiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

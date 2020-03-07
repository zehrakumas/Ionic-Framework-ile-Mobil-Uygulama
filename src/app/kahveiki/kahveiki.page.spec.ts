import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KahveikiPage } from './kahveiki.page';

describe('KahveikiPage', () => {
  let component: KahveikiPage;
  let fixture: ComponentFixture<KahveikiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahveikiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KahveikiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

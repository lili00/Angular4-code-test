import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
  TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [{path: '', component: HomeComponent}])]
        )
      ],
      declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});

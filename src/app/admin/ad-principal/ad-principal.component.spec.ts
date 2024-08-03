import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPrincipalComponent } from './ad-principal.component';

describe('AdPrincipalComponent', () => {
  let component: AdPrincipalComponent;
  let fixture: ComponentFixture<AdPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

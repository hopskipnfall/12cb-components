import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnetwocbComponentsComponent } from './onetwocb-components.component';

describe('OnetwocbComponentsComponent', () => {
  let component: OnetwocbComponentsComponent;
  let fixture: ComponentFixture<OnetwocbComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnetwocbComponentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetwocbComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

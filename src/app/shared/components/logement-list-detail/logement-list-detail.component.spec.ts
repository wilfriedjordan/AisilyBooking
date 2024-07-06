import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementListDetailComponent } from './logement-list-detail.component';

describe('LogementListDetailComponent', () => {
  let component: LogementListDetailComponent;
  let fixture: ComponentFixture<LogementListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogementListDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogementListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

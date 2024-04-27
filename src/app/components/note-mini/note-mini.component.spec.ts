import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMiniComponent } from './note-mini.component';

describe('NoteMiniComponent', () => {
  let component: NoteMiniComponent;
  let fixture: ComponentFixture<NoteMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteMiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

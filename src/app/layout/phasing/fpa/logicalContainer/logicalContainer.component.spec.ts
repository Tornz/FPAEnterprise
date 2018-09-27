import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalContainerComponent } from './logicalContainer.component';

describe('FunctionsComponent', () => {
  let component: LogicalContainerComponent;
  let fixture: ComponentFixture<LogicalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

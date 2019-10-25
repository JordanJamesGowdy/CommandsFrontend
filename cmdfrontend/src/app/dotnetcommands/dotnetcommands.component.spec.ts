import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetcommandsComponent } from './dotnetcommands.component';

describe('DotnetcommandsComponent', () => {
  let component: DotnetcommandsComponent;
  let fixture: ComponentFixture<DotnetcommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotnetcommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotnetcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmcommandsComponent } from './npmcommands.component';

describe('NpmcommandsComponent', () => {
  let component: NpmcommandsComponent;
  let fixture: ComponentFixture<NpmcommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmcommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

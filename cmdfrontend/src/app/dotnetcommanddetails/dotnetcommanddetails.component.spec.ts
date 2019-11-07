import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetcommanddetailsComponent } from './dotnetcommanddetails.component';

describe('DotnetcommanddetailsComponent', () => {
  let component: DotnetcommanddetailsComponent;
  let fixture: ComponentFixture<DotnetcommanddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotnetcommanddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotnetcommanddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

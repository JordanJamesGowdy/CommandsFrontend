import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmcommanddetailsComponent } from './npmcommanddetails.component';

describe('NpmcommanddetailsComponent', () => {
  let component: NpmcommanddetailsComponent;
  let fixture: ComponentFixture<NpmcommanddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmcommanddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmcommanddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

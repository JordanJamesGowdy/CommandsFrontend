import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmcommandlistComponent } from './npmcommandlist.component';

describe('NpmcommandlistComponent', () => {
  let component: NpmcommandlistComponent;
  let fixture: ComponentFixture<NpmcommandlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmcommandlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmcommandlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

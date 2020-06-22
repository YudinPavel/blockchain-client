import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElementComponent } from './page-element.component';

describe('PageElementComponent', () => {
  let component: PageElementComponent;
  let fixture: ComponentFixture<PageElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

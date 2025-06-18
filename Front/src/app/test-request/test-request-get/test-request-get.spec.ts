import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRequestGet } from './test-request-get';

describe('TestRequestGet', () => {
  let component: TestRequestGet;
  let fixture: ComponentFixture<TestRequestGet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestRequestGet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRequestGet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

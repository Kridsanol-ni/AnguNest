import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingSearch } from './shopping-search';

describe('ShoppingSearch', () => {
  let component: ShoppingSearch;
  let fixture: ComponentFixture<ShoppingSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

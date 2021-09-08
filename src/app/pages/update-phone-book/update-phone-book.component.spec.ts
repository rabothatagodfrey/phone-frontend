import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhoneBookComponent } from './update-phone-book.component';

describe('UpdatePhoneBookComponent', () => {
  let component: UpdatePhoneBookComponent;
  let fixture: ComponentFixture<UpdatePhoneBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePhoneBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

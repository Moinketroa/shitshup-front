import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotionConfigSectionComponent } from './update-notion-config-section.component';

describe('UpdateNotionConfigSectionComponent', () => {
  let component: UpdateNotionConfigSectionComponent;
  let fixture: ComponentFixture<UpdateNotionConfigSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNotionConfigSectionComponent]
    });
    fixture = TestBed.createComponent(UpdateNotionConfigSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

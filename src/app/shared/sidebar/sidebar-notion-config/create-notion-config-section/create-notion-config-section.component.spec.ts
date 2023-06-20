import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotionConfigSectionComponent } from './create-notion-config-section.component';

describe('CreateNotionConfigSectionComponent', () => {
  let component: CreateNotionConfigSectionComponent;
  let fixture: ComponentFixture<CreateNotionConfigSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNotionConfigSectionComponent]
    });
    fixture = TestBed.createComponent(CreateNotionConfigSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

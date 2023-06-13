import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeUserIconComponent } from './youtube-user-icon.component';

describe('YoutubeUserIconComponent', () => {
    let component: YoutubeUserIconComponent;
    let fixture: ComponentFixture<YoutubeUserIconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ YoutubeUserIconComponent ],
        })
            .compileComponents();

        fixture = TestBed.createComponent(YoutubeUserIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

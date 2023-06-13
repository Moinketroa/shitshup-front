import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarYoutubeConfigComponent } from './sidebar-youtube-config.component';

describe('SidebarYoutubeConfigComponent', () => {
    let component: SidebarYoutubeConfigComponent;
    let fixture: ComponentFixture<SidebarYoutubeConfigComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SidebarYoutubeConfigComponent ],
        })
            .compileComponents();

        fixture = TestBed.createComponent(SidebarYoutubeConfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

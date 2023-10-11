import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarPath } from './sidebar-routing.module';
import { RoutingOutlet } from '../../app-routing.module';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {

    private readonly _isSidebarOpenSubject = new BehaviorSubject(false);

    constructor(private readonly router: Router,
                private readonly route: ActivatedRoute) {
        // this.router.navigate([
        //     {
        //         outlets: {
        //             [RoutingOutlet.SIDEBAR]: []
        //         }
        //     }
        // ], { relativeTo: this.route.parent });
    }

    get isSidebarOpen$() {
        return this._isSidebarOpenSubject.asObservable();
    }

    openYoutubeConfig(): void {
        this.openSidebar(SidebarPath.YOUTUBE);
    }

    openNotionConfig(): void {
        this.openSidebar(SidebarPath.NOTION);
    }

    private openSidebar(path: SidebarPath) {
        this.router.navigate([
            {
                outlets: {
                    [RoutingOutlet.SIDEBAR]: [ path ]
                }
            }
        ]).then(() => {
            this._isSidebarOpenSubject.next(true);
        });
    }

    closeSidebar(): void {
        this.router.navigate([
            {
                outlets: {
                    [RoutingOutlet.SIDEBAR]: []
                }
            }
        ]).then(() => {
            this._isSidebarOpenSubject.next(false);
        });
    }
}

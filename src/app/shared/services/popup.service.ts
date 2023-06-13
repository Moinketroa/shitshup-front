import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PopupService {

    private readonly POPUP_WIDTH: number = 500;
    private readonly POPUP_HEIGHT: number = 600;

    private intervalId: any;

    openPopup(url: string, popupName: string): Window | null {
        const width = this.POPUP_WIDTH;
        const height = this.POPUP_HEIGHT;
        const left = (screen.width / 2) - (width / 2);
        const top = (screen.height / 2) - (height / 2);

        const options = `width=${width},height=${height},left=${left},top=${top}`;

        return window.open(url, popupName, options);
    }

    handlePopup(popupRef: Window, callback: () => void) {
        this.intervalId = window.setInterval(() => {
            if (popupRef.closed) {
                this.clear(popupRef, callback);
            } else {
                try {
                    const href = popupRef.location.href;

                    if (href?.endsWith('callback')) {
                        this.clear(popupRef, callback);
                    }
                } catch {

                }
            }
        });
    }

    clear(popupRef: Window, callback: () => void) {
        window.clearInterval(this.intervalId);
        popupRef.close();

        callback();
    }
}

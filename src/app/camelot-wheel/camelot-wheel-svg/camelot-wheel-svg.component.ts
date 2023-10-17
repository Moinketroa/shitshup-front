import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shitshup-camelot-wheel-svg',
  templateUrl: './camelot-wheel-svg.component.html',
  styleUrls: ['./camelot-wheel-svg.component.scss']
})
export class CamelotWheelSvgComponent {

    @Output()
    activate: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    deactivate: EventEmitter<string> = new EventEmitter<string>();

    activeSections: string[] = [];

    onSectionClick(section: string): void {
        if (this.activeSections.includes(section)) {
            this.deactivateSection(section);

            const index = this.activeSections.indexOf(section);
            this.activeSections.splice(index, 1);
        } else {
            if (this.activeSections.length === 2) {
                this.activeSections.forEach(activeSection => {
                    this.deactivateSection(activeSection);

                    this.activeSections = [];
                })
            } else {
                this.activateSection(section);

                this.activeSections.push(section)
            }
        }
    }

    private activateSection(section: string): void {
        const current = this.getElementSection(section);

        current.classList.add("active");

        this.activate.emit(section);
    }

    private deactivateSection(section: string) {
        const current = this.getElementSection(section);

        current.classList.remove("active");

        this.deactivate.emit(section);
    }

    private getElementSection(section: string): HTMLElement {
        return document.getElementById(`section-${section}`)!;
    }
}

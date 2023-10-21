import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropboxUser, NullDropboxUser } from '../../models/dropbox-user.model';

@Component({
  selector: 'shitshup-dropbox-user-icon',
  templateUrl: './dropbox-user-icon.component.html',
  styleUrls: ['./dropbox-user-icon.component.scss']
})
export class DropboxUserIconComponent {

    @Input()
    dropboxUser: DropboxUser = new NullDropboxUser();

    @Output()
    click: EventEmitter<void> = new EventEmitter();

}

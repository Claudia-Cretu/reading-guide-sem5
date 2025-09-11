import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-version-page',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './version-page.component.html',
  styleUrls: ['./version-page.component.css']
})
export class VersionPageComponent {
  versionText: string = '';
  changesText: string = '';
  datesText: string = '';
}

import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  invitationName = environment.invitationName;
  filterFacebook = environment.filterFacebook;
  filterInstagram = environment.filterInstagram;

}

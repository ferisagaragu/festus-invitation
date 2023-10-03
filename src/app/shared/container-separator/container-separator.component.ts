import { Component, Input } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-container-separator',
  templateUrl: './container-separator.component.html',
  styleUrls: ['./container-separator.component.scss']
})
export class ContainerSeparatorComponent {
  @Input() invert: boolean;
  @Input() type: number;
  separatorType = environment.separatorType;
}

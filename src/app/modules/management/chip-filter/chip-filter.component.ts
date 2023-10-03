import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { filtersData } from '../../../core/data/filters.data';
import { FilterInterfaces } from '../../../core/interfaces/filter.interfaces';
import { InvitationService } from '../../../core/http/invitation.service';
import { MatSelect, MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-chip-filter',
  templateUrl: './chip-filter.component.html',
  styleUrls: ['./chip-filter.component.scss']
})
export class ChipFilterComponent implements OnInit {

  @ViewChild('filterInput') filterInput: ElementRef<HTMLInputElement> | any;
  @ViewChild('familySelect') familySelect: MatSelect | any;

  @Output() filter: EventEmitter<string>;
  @Output() inputKeyup: EventEmitter<string>;

  filterFormControl: FormControl;
  filteredFilters: Observable<Array<FilterInterfaces>> | any;
  filters: Array<FilterInterfaces>;
  allFilters: Array<FilterInterfaces>;
  families: any;
  disabled: boolean;

  private subjectFilter = '';
  private statusFilter = '';
  private familyFilter = '';

  constructor(private invitationService: InvitationService) {
    this.disabled = false;
    this.filter = new EventEmitter<string>();
    this.inputKeyup = new EventEmitter<string>();
    this.filterFormControl = new FormControl();
    this.filters = [];
    this.allFilters = filtersData;
    this.families = [];
    this.disabled = true;
  }

  ngOnInit() {
    this.subscribeFilter();
    this.onFilterInputChange();
    this.findAllFamilies();
  }

  onRemove(filter: any): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.blockFilters(filter, false);
      this.filters.splice(index, 1);
      this.filterFormControl.setValue(null);
      this.filter.emit(this.getQueryPath());
      this.findAllFamilies();
    }
  }

  onSelected(event: MatAutocompleteSelectedEvent): void {
    this.blockFilters(event.option.value, true);
    this.filters.push(event.option.value);
    this.filterInput.nativeElement.value = '';
    this.filterFormControl.setValue(null);
    this.filter.emit(this.getQueryPath());
    this.findAllFamilies();
  }

  onSelectedFamilyChange(event: MatSelectChange) {
    if (event.value === undefined) {
      this.familyFilter = '';
    } else {
      this.familyFilter = event.value;
    }

    this.findAllFamilies();
    this.filter.emit(this.getQueryPath());
  }

  setDisabled(status: boolean) {
    this.disabled = status;
  }

  private subscribeFilter(): void {
    this.filteredFilters = this.filterFormControl.valueChanges.pipe(
      startWith(null),
      map((filter: string | null) =>
        filter ? this.filterChips(filter) : this.allFilters.slice()
      )
    );
  }

  private onFilterInputChange(): void {
    this.filterFormControl.valueChanges.subscribe((inputData: string | any) => {
      if (!inputData?.label) {
        if (inputData === null) {
          this.inputKeyup.emit('');
        } else {
          this.inputKeyup.emit(inputData);
        }
      }
    });
  }

  private getQueryPath() {
    return `/${this.subjectFilter}?status=${this.statusFilter}&family=${this.familyFilter}`;
  }

  private blockFilters(value: FilterInterfaces, disabled: boolean): void {
    if (value.label === 'Ale' || value.label === 'Fer') {
      this.allFilters[0].disabled = disabled;
      this.allFilters[1].disabled = disabled;
      this.familySelect.value = undefined;
      this.familyFilter = '';

      if (disabled) {
        this.subjectFilter = value.value;
      } else {
        this.subjectFilter = '';
      }
    } else {
      this.allFilters[2].disabled = disabled;
      this.allFilters[3].disabled = disabled;
      this.allFilters[4].disabled = disabled;
      this.allFilters[5].disabled = disabled;

      if (disabled) {
        this.statusFilter = value.value;
      } else {
        this.statusFilter = '';
      }
    }
  }

  private filterChips(value: any): Array<FilterInterfaces> {
    if (value.label) {
      return [];
    }

    const filterValue = value.toLowerCase();

    return this.allFilters.filter(fruit => fruit.label.toLowerCase().includes(filterValue));
  }

  private findAllFamilies() {
    this.invitationService.findAllInvitation(`/${this.subjectFilter}`)
      .subscribe((resp: any) => {
        this.families = resp.data;
      }
    );
  }

}

import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { InputUserIconComponent } from './input-user-icon.component';

describe('InputUserIconComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    await TestBed.configureTestingModule({
      declarations: [ InputUserIconComponent ],
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    }).compileComponents();
  });

  it(`should create`, () => {
    const fixture = TestBed.createComponent(InputUserIconComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`call setDisabledState function`, () => {
    const fixture = TestBed.createComponent(InputUserIconComponent);
    const component = fixture.componentInstance;
    expect(component.isDisabled).toBeFalsy();
    component.setDisabledState(true);
    fixture.detectChanges();
    expect(component.isDisabled).toBeTruthy();
  });

  it(`call refreshUserIcon function`, () => {
    const fixture = TestBed.createComponent(InputUserIconComponent);
    const component = fixture.componentInstance;
    const dataSorce = { data: 'http://fake-image-link' };

    expect(component.loadIcon).toBeFalsy();

    httpClientSpy.get.and.returnValue(of(dataSorce));
    component.refreshUserIcon();
    fixture.detectChanges();

    expect(component.userIcon).toEqual(dataSorce.data);
    expect(component.loadIcon).toBeFalsy();
    expect(component.reload).toBeTruthy();
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

});

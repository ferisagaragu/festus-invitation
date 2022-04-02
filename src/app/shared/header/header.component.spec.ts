import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { SessionService } from 'ng-urxnium';
import { HeaderComponent } from './header.component';
import { MatDialog } from '@angular/material/dialog';

class SessionServiceMock {
  onSignIn = of(true)
  onValidateTokenLoad = of(true)

  getUser() {
    return {
      "uuid":"2f965d78-dc13-4b66-97b0-2bcd9c13b79d",
      "name":"Fernando Isaías",
      "surname":"García",
      "motherSurname":"Aguirre",
      "photo":"https://fake",
      "accountType":"DEFAULT",
      "userName":"fernnypay95",
      "email":"ferisagaragu@gmail.com",
      "createDate":"2022-03-22T21:43:44.580+00:00",
      "team":null
    }
  }

  signOut() { }
}

describe('HeaderComponent', () => {
  let matDialog: jasmine.SpyObj<MatDialog>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    matDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ HeaderComponent ],
      imports: [
        MatProgressBarModule,
        MatToolbarModule,
        MatTooltipModule
      ],
      providers: [
        {
          provide: SessionService,
          useValue: new SessionServiceMock()
        },{
          provide: Router,
          useValue: router
        },{
          provide: MatDialog,
          useValue: matDialog
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('singOut application function', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    component.signOut();
    expect(router.navigate).toHaveBeenCalledWith(['/'] );
  });

  it('header is load', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    component.loadApp = true;
    fixture.detectChanges();

    const nativeComponent = fixture.nativeElement.getElementsByClassName('mat-progress-bar-buffer')[0];

    expect(nativeComponent.classList[0]).toEqual('mat-progress-bar-buffer');
  });

  it('when call dialog to config user', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    matDialog.open.and.returnValue(MatDialog['opened'])
    component.openConfigUser();
    expect(matDialog.open.calls.count()).toBe(1);
  });

});

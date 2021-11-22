import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProfileSettingsComponent } from './profile-settings.component';

describe('ProfileSettingsComponent', () => {
  let component: ProfileSettingsComponent;
  let fixture: ComponentFixture<ProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'assignment'`, () => {
    const fixture = TestBed.createComponent(ProfileSettingsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Profile');
  });

  it('should render username label', () => {
    const fixture = TestBed.createComponent(ProfileSettingsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.user-name p')?.textContent).toContain('Username: ');
  });

  it('should have Save in "Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#save-btn');
    expect(btn.value).toBe('Save');
  });

  it('should render username label', () => {
    const fixture = TestBed.createComponent(ProfileSettingsComponent);
    const component = fixture.componentInstance;
    component.isDataReady = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.load-state')?.textContent).toContain('Loading profile...');
  });

  it('should render username label', () => {
    const fixture = TestBed.createComponent(ProfileSettingsComponent);
    const component = fixture.componentInstance;
    component.isDataReady = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.load-state')?.textContent).toContain('Loading profile...');
  });

  it('should render username label', () => {
    const fixture = TestBed.createComponent(ProfileSettingsComponent);
    const component = fixture.componentInstance;
    component.savingProfile = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.save-state')?.textContent).toContain('Saving profile...');
  });

  it('should render username label', () => {
    const fixture = TestBed.createComponent(ProfileSettingsComponent);
    const component = fixture.componentInstance;
    component.errorMsg = 'Invalid name';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error-state')?.textContent).toContain('Error! : Invalid name');
  });

  it('should render username label', () => {
    const fixture = TestBed.createComponent(ProfileSettingsComponent);
    const component = fixture.componentInstance;
    component.user.email = 'michael.collins@bueface.com';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.email')?.textContent).toContain('Email: michael.collins@bueface.com');
  });

  it('Button click event using spyon', () => {
    spyOn(component, 'saveProfile');
    component.saveProfile('michael','collins');
    fixture.detectChanges();
    let buton = fixture.debugElement.query(By.css('#save-btn')).nativeElement.click();
    expect(component.saveProfile).toHaveBeenCalled();
  });

  // it('should bind input text value to Component property', () => {
  //   spyOn(component, 'nameChanged');
  //   const hostElement = fixture.nativeElement;
  //   const firstName: HTMLInputElement = hostElement.querySelector('#firstName');
  //   const lastName: HTMLInputElement = hostElement.querySelector('#lastName');

  //   fixture.detectChanges();

  //   firstName.value = 'collins';
  //   lastName.value = 'michael';

  //   firstName.dispatchEvent(new Event('input'));
  //   lastName.dispatchEvent(new Event('input'));

  //   expect(component.nameChanged).toHaveBeenCalled();
  // });

  it('should call namechange function', () => {
    component.nameChanged();
    fixture.detectChanges();
    expect(component.errorMsg).toEqual('');
  });

  it('should call saveProfile function', () => {
    component.saveProfile('michael','collins');
    fixture.detectChanges();
    expect(component.errorMsg).toEqual('');
  });
});

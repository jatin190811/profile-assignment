import { Component, OnInit } from '@angular/core';
import { IProfile, ProfileService } from '../../services/profile.service';
import { ProfileConstants } from '../../constants/profile.constants';
import { of, switchMap } from 'rxjs';
import { InternationalizationService } from '../../services/internationalization.service';
@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})

export class ProfileSettingsComponent implements OnInit {
  public title = 'Profile';
  public user: IProfile = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    age: 0
  };
  public firstName = '';
  public lastName = '';
  public isDataReady: Boolean = false;
  public savingProfile: Boolean = false;
  public errorMsg: any = '';
  public profileLabels: any;
  public profileStates: any;

  constructor(private _profileService: ProfileService,
    private _intService: InternationalizationService) {

  }

  ngOnInit() {
    this.getProfileData();
    this.initProfile();
  }

  __(text: any) {
    return this._intService.__(text);
  }
  private initProfile() {
    this.profileLabels = ProfileConstants.PROFILE_LABELS;
    this.profileStates = ProfileConstants.PROFILE_STATES;
  }

  private async getProfileData() {
    while (!this.user.firstName) {
      try {
        this.user = await this._profileService.getProfileUser();
        this.isDataReady = this.user.firstName ? true : false;
      }
      catch (e) {}
    }
    this.firstName = JSON.parse(JSON.stringify(this.user.firstName));
    this.lastName = JSON.parse(JSON.stringify(this.user.lastName));
  }

  nameChanged() {
    this.errorMsg = '';
  }

  setUserName(firstName: string, lastName: string) {
    this._profileService.setName(firstName, lastName).then((userData: any) => {
      this.firstName = userData.firstName;
      this.lastName = userData.lastName;
    }).catch(({ error }) => {
    })
  }

  async saveProfile(firstName: string, lastName: string) {
    this.user.email = '';
    let userDetails = JSON.parse(JSON.stringify(this.user));
    this.errorMsg = '';
    this.savingProfile = true;
    try {
      let user = await this._profileService.setName(firstName, lastName);
      try {
        await this._profileService.setUserEmail();
        this.savingProfile = false;
      }
      catch ({ error }) {
        this.savingProfile = false;
        this.setUserName(userDetails.firstName, userDetails.lastName)
        this.errorMsg = (error as Error);
      }
    }
    catch ({ error }) {
      this.savingProfile = false;
      this.errorMsg = (error as Error);
    }
  }

  changeLang(event: any) {
    this._intService.setLang(event.target.value);
  }
}
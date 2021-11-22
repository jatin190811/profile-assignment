import { Injectable } from '@angular/core';
import { ProfileConstants } from '../constants/profile.constants';

export interface IProfile {
  firstName: string;
  lastName: string;
  userName: string;
  email?: string;
  age: number;
}
@Injectable({ providedIn: 'root' })
export class ProfileService {
  public user!: IProfile;
  public profileConstants = ProfileConstants.ERROR_MSG;
  constructor() { }

  getProfileUser(): Promise <IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user = {
            firstName: 'Michael',
            lastName: 'Collins',
            userName: 'michael.collins',
            age: 30
          };
          resolve(this.user);
        } else {
          reject({ error: this.profileConstants.profile });
        }
      }, Math.random() * 5000);
    });
  }

  setName<IProfile>(firstName: string, lastName: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user.firstName = firstName;
          this.user.lastName = lastName;
          this.user.userName = firstName.trim().toLowerCase()+"."+lastName.trim().toLowerCase();
          resolve(this.user);
        } else {
          reject({ error: this.profileConstants.name });
        }
      }, Math.random() * 5000);
    });
  }

  setUserEmail(): Promise <IProfile>  {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(Math.round(Math.random())){
          this.user.email = this.user.firstName.trim()+"."+this.user.lastName.trim()+"@blueface.com";
          resolve(this.user);
        } else {
          reject({error: this.profileConstants.email })
        }
      }, Math.random() * 5000)
    })
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent {
  // track which cards are open
  open = {
    preferences: false,
    saved: false,
    password: false,
    delete: false,
  };

  // Personal info
  editPersonal = false;
  personal = {
    name: '',
    email: '',
    phone: '',
    education: '',
    profession: '',
  };

  // Preferences
  prefs = { type: 'Full-Time', location: '', salary: null as number | null };

  // Saved jobs
  savedJobs = ['Frontend Developer at XYZ Ltd.', 'UI/UX Designer at ABC Inc.'];

  // Change password
  password = { current: '', new: '', confirm: '' };
  pwAlert: { type: 'success' | 'danger'; msg: string } | null = null;

  // Delete account alert
  delAlert: { type: 'success' | 'danger'; msg: string } | null = null;

  toggle(key: keyof typeof this.open) {
    this.open[key] = !this.open[key];
  }

  savePersonal() {
    // call service...
    this.editPersonal = false;
    // show a temporary success alert (could be a toast)
  }

  savePrefs() {
    // call service...
    // show confirmation
  }

  removeSaved(idx: number) {
    this.savedJobs.splice(idx, 1);
    // show a toast or inline alert if desired
  }

  updatePassword() {
    if (this.password.new !== this.password.confirm) {
      this.pwAlert = { type: 'danger', msg: 'Passwords do not match.' };
      return;
    }
    // call service to update...
    this.pwAlert = { type: 'success', msg: 'Password updated successfully.' };
    // clear fields
    this.password = { current: '', new: '', confirm: '' };
  }

  confirmDelete() {
    // call delete service...
    this.delAlert = { type: 'danger', msg: 'Your account has been deleted.' };
  }
}

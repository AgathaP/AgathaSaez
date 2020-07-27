import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profilePhoto: Observable< string | null >;

  constructor( private storage: AngularFireStorage ) {
    const ref = this.storage.ref('DSC02170.png');
    this.profilePhoto = ref.getDownloadURL();
  }

  ngOnInit(): void {}
  /* gs://agathasaez-6f2c9.appspot.com/ */
}

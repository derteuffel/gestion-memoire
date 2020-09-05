import { Component, OnInit } from '@angular/core';
import {MemoireService} from '../../admin/memoire/memoire.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../admin/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;
  searchedKeyword: string;


  lists: Observable<any[]>;
  constructor(private memoireService: MemoireService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.lists = this.memoireService.getAllMemoiresForHome();
  }

  handlePageChange(event) {
    this.page = event;
  }

}

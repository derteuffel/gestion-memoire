import { Component, OnInit } from '@angular/core';
import {MemoireService} from '../memoire.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-memoire-list',
  templateUrl: './memoire-list.component.html',
  styleUrls: ['./memoire-list.component.css']
})
export class MemoireListComponent implements OnInit {

  page = 1;
  searchedKeyword: string;


  lists: Observable<any[]>;
  constructor( private memoiresService: MemoireService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadAll();
  }

   loadAll(){
    this.lists = this.memoiresService.getAllMemoires();
    console.log(this.lists);
  }

  handlePageChange(event) {
    this.page = event;
  }


}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MemoireDetail} from './memoire-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {MemoireService} from '../memoire.service';

@Component({
  selector: 'app-memoire-details',
  templateUrl: './memoire-details.component.html',
  styleUrls: ['./memoire-details.component.css']
})
export class MemoireDetailsComponent implements OnInit {

  memoire: MemoireDetail;
  permaLink: number;
  constructor(private router: ActivatedRoute, private memoiresService: MemoireService, private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.memoiresService.getMemoire(this.permaLink).subscribe((data: MemoireDetail) => {
      this.memoire = data;
    },(err: any) => {
      console.log('Failure Response');
    });
  }

  delete(id: number){
    this.memoiresService.deleteMemoire(id).subscribe( data => {
      console.log('Data deleted succesful');
      this.route.navigateByUrl('/memoire-list');
    }, error => {
      console.log('Error, in deleted action');
    } )
  }

}

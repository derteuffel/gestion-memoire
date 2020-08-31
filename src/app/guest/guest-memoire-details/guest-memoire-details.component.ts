import { Component, OnInit } from '@angular/core';
import {MemoireDetail} from '../../admin/memoire/memoire-details/memoire-detail';
import {ActivatedRoute} from '@angular/router';
import {MemoireService} from '../../admin/memoire/memoire.service';

@Component({
  selector: 'app-guest-memoire-details',
  templateUrl: './guest-memoire-details.component.html',
  styleUrls: ['./guest-memoire-details.component.css']
})
export class GuestMemoireDetailsComponent implements OnInit {

  memoire: MemoireDetail;
  permaLink: number;
  constructor(private route: ActivatedRoute, private memoiresService: MemoireService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.memoiresService.getGuestMemoire(this.permaLink).subscribe((data: MemoireDetail) => {
      this.memoire = data;
    },(err: any) => {
      console.log('Failure Response');
    });
  }

}

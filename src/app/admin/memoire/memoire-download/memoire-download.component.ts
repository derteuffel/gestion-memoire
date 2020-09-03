import { Component, OnInit } from '@angular/core';
import {MemoireUploadService} from '../memoire-upload.service';
import {PieceDetails} from './piece-details';
import {ActivatedRoute} from '@angular/router';
import {MemoireService} from '../memoire.service';

@Component({
  selector: 'app-memoire-download',
  templateUrl: './memoire-download.component.html',
  styleUrls: ['./memoire-download.component.css']
})
export class MemoireDownloadComponent implements OnInit {

  piece: any;
  titre: string;
  constructor(private downloadService: MemoireService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.titre = params['titre'];
      console.log(this.titre);
    });

    this.downloadService.getPiece(this.titre).subscribe((data: PieceDetails) => {
      this.piece = data;
      console.log(data);
    },(err: any) => {
      console.log('Failure Response');
    });
  }

  download(name: string){
    console.log('je suis dedans');
    this.downloadService.getFile(name).subscribe(data => {
      console.log('download successfuly');
    }, error => {
      console.log('download Failed')
    });
  }

}

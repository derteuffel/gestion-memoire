import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MemoireUploadService} from '../memoire-upload.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {MemoireDetail} from '../memoire-details/memoire-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {MemoireService} from '../memoire.service';

@Component({
  selector: 'app-memoire-upload',
  templateUrl: './memoire-upload.component.html',
  styleUrls: ['./memoire-upload.component.css']
})
export class MemoireUploadComponent implements OnInit {

  memoire: MemoireDetail;
  titre: string;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  constructor(private uploadService: MemoireUploadService, private router: ActivatedRoute, private memoiresService: MemoireService, private route: Router) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.router.params.subscribe(params => {
      this.titre = params['titre'];
    });

    this.memoiresService.getMemoireByName(this.titre).subscribe((data: MemoireDetail) => {
      this.memoire = data;
    },(err: any) => {
      console.log('Failure Response');
    });
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile, this.memoire.id).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
        this.route.navigateByUrl('/memoire-details/'+this.memoire.id);
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

}

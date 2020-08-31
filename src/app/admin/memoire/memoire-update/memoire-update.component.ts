import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MemoirePayload} from '../memoire-add/memoire-payload';
import {MemoireDetail} from '../memoire-details/memoire-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {MemoireService} from '../memoire.service';
import {UpdateMemoirePayload} from './update-memoire-payload';

@Component({
  selector: 'app-memoire-update',
  templateUrl: './memoire-update.component.html',
  styleUrls: ['./memoire-update.component.css']
})
export class MemoireUpdateComponent implements OnInit {

  updateMemoirePayload: UpdateMemoirePayload;
  otherFormElement: FormGroup;
  permaLink: number;
  memoireDetail: MemoireDetail;
  constructor(private router: ActivatedRoute, private  memoiresService: MemoireService,
              private route: Router) {

    this.updateMemoirePayload = {
      titre: '',
      resume: '',
      abstractMemoire: '',
      options: '',
      session: '',
      nomEtudiant: '',
      matriculeEtudiant: '',
      nomEncadreur: '',
      titreDiplome: '',
      intituleFiliere: '',
      codeFiliere: '',
      motCles: ''
    }
  }

  ngOnInit(): void {
    this.memoireDetail = new MemoireDetail();
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });
    this.memoiresService.getMemoire(this.permaLink).subscribe((data: MemoireDetail) => {
      this.memoireDetail = data;
    },(err: any) => {
      console.log('Failure Response');
    });
  }

  updateMemoire(){
    var  i: number;
    this.updateMemoirePayload.abstractMemoire = this.memoireDetail.abstractMemoire;
    for (i = 0 ; i < this.memoireDetail.motCles.length ; i++){
      this.updateMemoirePayload.motCles.concat(this.memoireDetail.motCles[i] + ',');
    }
    this.updateMemoirePayload.nomEncadreur = this.memoireDetail.nomEncadreur;
    this.updateMemoirePayload.nomEtudiant = this.memoireDetail.nomEtudiant;
    this.updateMemoirePayload.options = this.memoireDetail.options;
    this.updateMemoirePayload.session = this.memoireDetail.session;
    this.updateMemoirePayload.resume = this.memoireDetail.resume;
    this.updateMemoirePayload.titre = this.memoireDetail.titre;
    this.updateMemoirePayload.titreDiplome = this.memoireDetail.titreDiplome;
    this.updateMemoirePayload.codeFiliere = this.memoireDetail.titreFiliere;
    this.memoiresService.updateMemoire(this.updateMemoirePayload, this.permaLink).subscribe(
      data => {
        console.log(data);
        this.route.navigateByUrl('/memoire-details/' + this.permaLink);
      }, error => {
        console.log('Modification echoue' + error);
      }
    )

  }

}

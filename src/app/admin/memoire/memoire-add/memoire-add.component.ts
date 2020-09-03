import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MemoireService} from '../memoire.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {MemoirePayload} from './memoire-payload';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-memoire-add',
  templateUrl: './memoire-add.component.html',
  styleUrls: ['./memoire-add.component.css']
})
export class MemoireAddComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;


  addMemoireForm: FormGroup;
  memoirePayload: MemoirePayload;
  titre = new FormControl();
  resume = new FormControl();
  abstractMemoire = new FormControl();
  contenu = new FormControl();
  nomEncadreur = new FormControl();
  titreEncadreur = new FormControl();
  gradeEncadreur = new FormControl();
  nomEtudiant = new FormControl();
  matriculeEtudiant = new FormControl();
  codeFiliere = new FormControl();
  titreDiplome = new FormControl();
  intituleFiliere = new FormControl();
  motCles = new FormControl();
  session = new FormControl();
  options = new FormControl();
  constructor(private memoiresService: MemoireService, private router: Router) {
    this.addMemoireForm = new FormGroup({
      titre: this.titre,
      resume: this.resume,
      titreDiplome: this.titreDiplome,
      abstractMemoire: this.abstractMemoire,
      nomEncadreur: this.nomEncadreur,
      titreEncadreur: this.titreEncadreur,
      gradeEncadreur: this.gradeEncadreur,
      nomEtudiant: this.nomEtudiant,
      matriculeEtudiant: this.matriculeEtudiant,
      codeFiliere: this.codeFiliere,
      intituleFiliere: this.intituleFiliere,
      motCles: this.motCles,
      session: this.session,
      options: this.options
    });
    this.memoirePayload = {
      titre: '',
      resume: '',
      abstractMemoire: '',
      titreDiplome: '',
      nomEncadreur: '',
      titreEncadreur: '',
      gradeEncadreur: '',
      nomEtudiant: '',
      matriculeEtudiant: '',
      codeFiliere: '',
      intituleFiliere: '',
      motCles: '',
      session: '',
      options: ''
    }
  }

  ngOnInit(): void {

  }
  addMemoire(){
    this.memoirePayload.abstractMemoire = this.addMemoireForm.get('abstractMemoire').value;
    this.memoirePayload.codeFiliere = this.addMemoireForm.get('codeFiliere').value;
    this.memoirePayload.gradeEncadreur = this.addMemoireForm.get('gradeEncadreur').value;
    this.memoirePayload.intituleFiliere = this.addMemoireForm.get('intituleFiliere').value;
    this.memoirePayload.matriculeEtudiant = this.addMemoireForm.get('matriculeEtudiant').value;
    this.memoirePayload.motCles = this.addMemoireForm.get('motCles').value;
    this.memoirePayload.nomEncadreur = this.addMemoireForm.get('nomEncadreur').value;
    this.memoirePayload.nomEtudiant = this.addMemoireForm.get('nomEtudiant').value;
    this.memoirePayload.options = this.addMemoireForm.get('options').value;
    this.memoirePayload.resume = this.addMemoireForm.get('resume').value;
    this.memoirePayload.session = this.addMemoireForm.get('session').value;
    this.memoirePayload.titre = this.addMemoireForm.get('titre').value;
    this.memoirePayload.titreEncadreur = this.addMemoireForm.get('titreEncadreur').value;
    this.memoirePayload.titreDiplome = this.addMemoireForm.get('titreDiplome').value;
    this.memoiresService.addMemoire(this.memoirePayload).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/memoire-upload/' + this.memoirePayload.titre);
    }, error => {console.log('Aucune reponse' + error);
    })
  }

}

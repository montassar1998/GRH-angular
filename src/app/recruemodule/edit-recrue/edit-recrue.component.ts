import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CandidatService } from 'src/app/service/candidat.service';
@Component({
  selector: 'app-edit-candidat',
  
  templateUrl: './edit-recrue.component.html',
  styleUrls: ['./edit-recrue.component.css'],
})
export class EditRecrueComponent implements OnInit {
  id_de_recr_recu;
  constructor(
    public candServ: CandidatService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id_de_recr_recu = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id_de_recr_recu == -1) {
      alert('non existant ');
    }
    console.log(
      'I received ',
      this.candServ.Candidats.find((e) => e.id == this.id_de_recr_recu)
    );

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
       this.id_de_recr_recu = this.activatedRoute.snapshot.paramMap.get('id');
       console.log
       ("received " + this.candServ.Candidats.find((e) => e.id == Number(p.get('id'))))
      },
    });
  }

  gotoHome() {
    alert(    "lol" + this.activatedRoute.snapshot.paramMap.get('id')
    )
    console.log(this.candServ.Candidats);
    this.router.navigate(['recrues']);
  }
}

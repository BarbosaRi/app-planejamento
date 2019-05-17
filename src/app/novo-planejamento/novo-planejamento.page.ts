import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  Salvar(form){
    const Planejamento = form.value.nome
    const faturamento = form.value.nome2
    const custo = form.value.nome3
    console.log(Planejamento, faturamento,custo)

    localStorage.setItem(Planejamento,faturamento,)
    
    form.reset()

    this.nav.back()


  }
}

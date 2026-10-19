import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-financeiro',
  imports: [MenuComponent],
  templateUrl: './financeiro.component.html',
  styleUrl: './financeiro.component.css'
})
export class FinanceiroComponent {
  receitaTotal : Number = 12.343;
  despesasTotal : Number = 2.151;
  lucroLiquido : Number = 2.542;
  porReceita : Number = 15;
  porDespesas : Number = 8;
  porLucro : Number = 18;
  
}

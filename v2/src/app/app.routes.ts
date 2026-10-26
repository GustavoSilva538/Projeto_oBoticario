import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { VendasComponent } from './pages/vendas/vendas.component';

export const routes: Routes = [
    {path: "",component:HomeComponent},
    {path: "clientes",component:ClientesComponent},
    {path: "financeiro",component:FinanceiroComponent},
    {path: "inventario",component:InventarioComponent},
    {path: "vendas",component:VendasComponent}
];

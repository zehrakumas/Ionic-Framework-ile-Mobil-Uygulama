import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'kahvebir',
    loadChildren: () => import('./kahvebir/kahvebir.module').then( m => m.KahvebirPageModule)
  },
  {
    path: 'kahveiki',
    loadChildren: () => import('./kahveiki/kahveiki.module').then( m => m.KahveikiPageModule)
  },
  {
    path: 'kahveuc',
    loadChildren: () => import('./kahveuc/kahveuc.module').then( m => m.KahveucPageModule)
  },
  {
    path: 'kahvedort',
    loadChildren: () => import('./kahvedort/kahvedort.module').then( m => m.KahvedortPageModule)
  },
  {
    path: 'kahvebes',
    loadChildren: () => import('./kahvebes/kahvebes.module').then( m => m.KahvebesPageModule)
  },
  {
    path: 'turkkahvesi',
    loadChildren: () => import('./turkkahvesi/turkkahvesi.module').then( m => m.TurkkahvesiPageModule)
  },
  {
    path: 'kulkahvesi',
    loadChildren: () => import('./kulkahvesi/kulkahvesi.module').then( m => m.KulkahvesiPageModule)
  },
  {
    path: 'mirra',
    loadChildren: () => import('./mirra/mirra.module').then( m => m.MirraPageModule)
  },
  {
    path: 'suvarikahvesi',
    loadChildren: () => import('./suvarikahvesi/suvarikahvesi.module').then( m => m.SuvarikahvesiPageModule)
  },
  {
    path: 'americano',
    loadChildren: () => import('./americano/americano.module').then( m => m.AmericanoPageModule)
  },
  {
    path: 'lungo',
    loadChildren: () => import('./lungo/lungo.module').then( m => m.LungoPageModule)
  },
  {
    path: 'cappucino',
    loadChildren: () => import('./cappucino/cappucino.module').then( m => m.CappucinoPageModule)
  },
  {
    path: 'cafelatte',
    loadChildren: () => import('./cafelatte/cafelatte.module').then( m => m.CafelattePageModule)
  },
  {
    path: 'maccihiato',
    loadChildren: () => import('./maccihiato/maccihiato.module').then( m => m.MaccihiatoPageModule)
  },
  {
    path: 'affogato',
    loadChildren: () => import('./affogato/affogato.module').then( m => m.AffogatoPageModule)
  },
  {
    path: 'eiskaffee',
    loadChildren: () => import('./eiskaffee/eiskaffee.module').then( m => m.EiskaffeePageModule)
  },
  {
    path: 'icedcoffee',
    loadChildren: () => import('./icedcoffee/icedcoffee.module').then( m => m.IcedcoffeePageModule)
  },
  {
    path: 'frappe',
    loadChildren: () => import('./frappe/frappe.module').then( m => m.FrappePageModule)
  },
  {
    path: 'mazagran',
    loadChildren: () => import('./mazagran/mazagran.module').then( m => m.MazagranPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

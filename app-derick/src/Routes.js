import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import EtatCivil from '@/pages/EtatCivil/EtatCivil';
import Urbanisme from '@/pages/Urbanisme/Urbanisme';
import RendezVous from '@/pages/RendezVous/RendezVous';
import Documents from '@/pages/Documents/Documents';
import Procedures from '@/pages/Procedures/Procedures';
import Mairie from '@/pages/Mairie/Mairie';


//import { isAuthenticated } from './mixins/auth';

Vue.use(Router);

export default new Router({
  //base: "/app-derick",
  mode: 'history',
  routes: [
    {path: '/app-derick/', redirect: '/app-derick/app/dashboard'},
    {
      path: '/app-derick/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name:'DashboardPage',
        },
        {
          path: 'services/etat-civil',
          name: 'EtatCivilPage',
          component: EtatCivil,
        },
        {
          path: 'services/urbanisme',
          name: 'UrbanismePage',
          component: Urbanisme,
        },
        {
          path: 'services/rendez-vous',
          name: 'RendezVousPage',
          component: RendezVous,
        },
        {
          path: 'documents',
          name: 'DocumentsPage',
          component: Documents,
        },
        {
          path: 'procedures',
          name: 'ProceduresPage',
          component: Procedures,
        },
        {
          path: 'votre-mairie',
          name: 'MairiePage',
          component: Mairie,
        },
      ],
    },
  ],
});

import { Routes } from '@angular/router';

import { RwandaComponent } from './rwanda/rwanda.component';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'rwanda',
				component: RwandaComponent,
				data: {
					title: 'Rwanda',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Rwanda' }
					]
				}
			}
			
		]
	}
];

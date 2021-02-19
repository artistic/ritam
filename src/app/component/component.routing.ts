import { Routes } from '@angular/router';

import { RwandaComponent } from './rwanda/rwanda.component';
import { LandlordsComponent } from './landlords/landlords.component';

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
	},
	{
		path: '',
		children: [
			{
				path: 'landlords',
				component: LandlordsComponent,
				data: {
					title: 'Landlords',
					urls: [
						{ title: 'Landloards', url: '/landlords' },
						{ title: 'ngComponent' },
						{ title: 'Landloards' }
					]
				}
			}
			
		]
	}
];

import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/main-page.component').then(m => m.MainPageComponent)
	},
	{
		path: 'version',
		loadComponent: () => import('./pages/version-page.component').then(m => m.VersionPageComponent)
	}
	,
		{
			path: 'table-of-contents',
			loadComponent: () => import('./pages/table-of-contents-page.component').then(m => m.TableOfContentsPageComponent),
			data: { animation: 'table-of-contents' }
		}
];

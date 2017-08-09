import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'jhi-app-breadcrumbs',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbsComponent {
  routerLink: any;
  breadcrumbs: Array<Object>;
  last = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.filter((event) => event instanceof NavigationEnd).subscribe((event) => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
      turl = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach((route) => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            turl += '/' + routeSnapshot.url.map((segment) => segment.path).join('/');
            this.breadcrumbs.push({
              label: route.snapshot.data,
              url:   turl
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
    });
  }
}

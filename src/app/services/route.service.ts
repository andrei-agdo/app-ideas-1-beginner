import { filter, map } from 'rxjs/operators';
import { Router, ActivatedRoute, ResolveStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  dataRoute(): Observable<any> {
    return new Observable((ob) => {
      this.router.events.pipe(
        filter(event => event instanceof ResolveStart),
        map(event => {
          let data = null;
          let route = event['state'].root;

          while (route) {
            data = route.data || data;
            route = route.firstChild;
          }

          return data;
        }),
      ).subscribe((data) => ob.next(data));
    })
  }
}

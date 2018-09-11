import { Injectable } from '@angular/core';
import { routes } from '../app-routing.module';

export class Navigation {
    text: string;
    path: string;
    icon?: string;
    items?: Navigation[];
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    getNavigation() {
        return routes.map((route) => {
            let items = [];
            const children = route.children;
            if(children) {
                children.forEach((child) => {
                    items.push({
                        text: child.data.title,
                        path: route.path + '/' + child.path
                    });
                });
            }

            return {
                text: route.data.title,
                path: route.path,
                icon: route.data.icon,
                items: items };
        });
    }
}

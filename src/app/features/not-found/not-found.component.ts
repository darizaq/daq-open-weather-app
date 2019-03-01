import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {


	requestedRoute;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.requestedRoute = this.route.snapshot.url.map(item => item.path).join('/');
	}

}

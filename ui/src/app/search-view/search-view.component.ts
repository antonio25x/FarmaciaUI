import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  searchTerm : string;

  constructor(private route : ActivatedRoute) {}

  ngOnInit() {

    /**
     * The term is pass from the horizontal navigation bar component.
     * Specificlly from the search button content.
     * If it is empty we shouldn't do a search. 
     */
    this.route.params.subscribe(params => {
      if (params['term']) {
        this.searchTerm = params['term'];
      }
    });
  }

}

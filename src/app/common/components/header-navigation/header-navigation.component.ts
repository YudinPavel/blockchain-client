import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadHeaderConfig } from '../../store/actions/header.actions';
import { selectHeaderConfigInfo } from '../../store/selectors/header.selector';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.less']
})
export class HeaderNavigationComponent implements OnInit {

  headerConfig: Observable<any> = this.store.pipe(
    select(selectHeaderConfigInfo),
    map((item) => {
      console.log(item);
      return item.headerConfig;
    })
  )

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadHeaderConfig());
  }

}

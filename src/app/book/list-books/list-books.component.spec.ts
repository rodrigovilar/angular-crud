///<reference path="../../../../node_modules/@angular/core/testing/src/test_bed.d.ts"/>
///<reference path="list-books.component.ts"/>
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListBooksComponent } from './list-books.component';
import { BookService } from '../book.service';
import { routes } from '../../routes';
import { NewBookComponent } from '../new-book/new-book.component';

describe('ListBooksComponent', () => {
  let component: ListBooksComponent;
  let fixture: ComponentFixture<ListBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:
        [
          ListBooksComponent,
          NewBookComponent
        ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        BookService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render table headers', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#nameHeader').textContent).toContain('Name');
    expect(compiled.querySelector('#authorHeader').textContent).toContain('Author');
  });
});

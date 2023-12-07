import { Component } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {

  movies: string[] = [
    'Spider Man.png',
    'Avengers.png',
    'Guardians of The Galaxy.png',
    'Knives Out.png',
    'Tenet.png'
  ];

  releaseDates: { [key: string]: string } = {
    'Spider Man.png': '2018-12-14',
    'Avengers.png': '2015-05-01',
    'Guardians of The Galaxy.png': '2014-08-01',
    'Knives Out.png': '2019-11-27',
    'Tenet.png': '2020-09-03'
    // Add more movie titles and release dates as needed
  };

  sortMovies(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement)?.value; // Safely accessing target's value
    if (selectedValue === 'ASC') {
      this.movies.sort((a, b) => a.localeCompare(b));
    } else if (selectedValue === 'DESC') {
      this.movies.sort((a, b) => b.localeCompare(a));
    } else if (selectedValue === 'Newest') {
      this.sortByReleaseDate('DESC');
    } else if (selectedValue === 'Oldest') {
      this.sortByReleaseDate('ASC');
    }
  }

  private sortByReleaseDate(order: string): void {
    if (order === 'ASC') {
      this.movies.sort((a, b) => {
        const dateA = new Date(this.releaseDates[a]);
        const dateB = new Date(this.releaseDates[b]);
        return dateA.getTime() - dateB.getTime();
      });
    } else if (order === 'DESC') {
      this.movies.sort((a, b) => {
        const dateA = new Date(this.releaseDates[a]);
        const dateB = new Date(this.releaseDates[b]);
        return dateB.getTime() - dateA.getTime();
      });
    }
  }
}

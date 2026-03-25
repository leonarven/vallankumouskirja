
import { OnInit, AfterViewInit, ChangeDetectorRef, Component, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { Song } from '../classes/Song';
import { LoadingService       } from '../services/loading.service';
import { SongsService         } from '../services/songs.service';
import { CurrentSongService   } from '../services/current-song.service';
import { SongListService      } from '../services/song-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'song-list',
	template: `
	<div id="search">
		<input
			#searchInput
			type="text"
			class="form-control"
			style="user-select:none"
			placeholder="Hae..."
			[(ngModel)]="search"
			(ngModelChange)="runFilter()"
		>

		<a style="cursor:pointer" class="clear-btn glyphicon glyphicon-remove" *ngIf="search.trim().length" (click)="runFilter('')"></a>
	</div>

	<ul id="songlist" class="songs-list-group list-group">
		<li
			class="list-group-item"
			style="user-select:none"
			*ngFor="let song of getSongs()"
			[class.active]="currentSongKey == song.key"
		>
			<a style="cursor:pointer" (click)="select(song.key)">
				<h4 class="title"><b class="number">{{ song.num }}.</b>&nbsp;{{ song.title }}</h4>
			</a>
		</li>

		<li
			class="list-group-item no-results"
			style="user-select:none"
			*ngIf="searchResult != null && searchResult.length == 0"
		>
			<b><h4>Ei lauluja :&lt;</h4></b>
		</li>

		<li class="list-group-item footer" *ngIf="searchResult != null && searchResult.length == 0">
			<p><a href="mailto:vallankumouslaulukirja@miron.fi">L&auml;het&auml; palautetta</a></p>
		</li>

		<li class="list-group-item notice" *ngIf="searchResult == null">
			<p>Laulukirjaa kehitetään, joten l&auml;het&auml; palautetta <a href="mailto:palaute@vallankumouskirja.fi">sähköpostitse</a> tai <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdwoZsppuBa2C6ELUPCvE40Wq--JSoNwOtoNYunDE9z0eeA_A/viewform">lomakkeella</a>, mikäli havaitset jotain huomautettavaa.</p>
		</li>
	</ul>`,
	styles: [`
		.list-group-item.footer,
		.list-group-item.notice,
		.list-group-item.no-results {
			margin: 10px 0px;
			border: none !important;
			background: transparent !important;
			text-align: center;
		}`
	]
})
export class SongListComponent implements OnInit, AfterViewInit {

	@ViewChild('searchInput') searchInput!: ElementRef;

	search: string = "";

	searchResult: (null|Song[]) = null;

	get currentSongKey(): (null|string) {
		return this.currentSong.current && this.currentSong.current.key;
	}
	set currentSongKey( key: (null|string) ) {
		this.currentSong.select( key );
	}

	constructor(
		private cdr: ChangeDetectorRef,
		public songList: SongListService,
		public currentSong: CurrentSongService,
		public Songs: SongsService,
		private route: ActivatedRoute
	) {}

	ngOnInit() { }

	ngAfterViewInit() {
		if (this.searchInput) {
			this.searchInput.nativeElement.focus();
		}
	}

	select( songKey: string ) {
		if (!this.currentSong.current || this.currentSong.current.key != songKey) {
			this.currentSongKey = songKey;
		} else if (window.innerWidth <= 768) {
			this.songList.close();
		}
	}

	getSongs() {

		if (this.searchResult != null) return this.searchResult;

		return this.Songs.sorted;
	}


	runFilter( searchStr = this.search ) {

		this.search = searchStr = searchStr || '';

		this.searchResult = null;

		let searchArr = searchStr.toLowerCase( ).trim( ).split( /\s+/g );

		if (searchArr.length) {

			this.searchResult = this.Songs.sorted.filter( song => {
				for (let word of searchArr) {
					if (song.$search.$string.indexOf( word ) != -1) return true;
				}
				return false;
			});
		}
	}
}

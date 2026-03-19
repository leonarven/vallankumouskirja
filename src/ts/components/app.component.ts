import { Component } from '@angular/core';
import { SongListService } from '../services/song-list.service';
import { CurrentSongService } from '../services/current-song.service';
import { LoadingService } from '../services/loading.service';
import { FontService } from '../services/font.service';

@Component({
	selector: 'app-root',
	template: `
		<main>
		<section id="song-content" class="col-xs-12" style="user-select:text"
			 [ngClass]="{ 'col-sm-6 col-md-8 col-lg-9 col-sm-offset-6 col-md-offset-4 col-lg-offset-3' : songList.isOpen() }"
		>

			<article id="content"
				 class="loading col-xs-12 col-sm-12 col-md-12 col-lg-pull-0"
				 [class.loading]="loading.is()"
				 [class.col-lg-8]="songList.isOpen()"
			>
				<router-outlet></router-outlet>
				<!--<ui-view></ui-view>-->
			</article>

		</section>

		<section id="songlist-wrapper"
			 class="sidebar col-xs-12 col-sm-6 col-md-4 col-lg-3"
			 *ngIf="songList.isOpen()"
		>
			 <song-list></song-list>
		</section>

	</main>

	<header class="navbar navbar-default" [class.songlist-open]="songList.isOpen()">
		<div class="container-fluid">
			<div class="navbar-header">
				<!--
				<ul class="nav navbar-nav pull-right">
					<li class="font-ctrl"><a class="font-decr-btn" (click)="font.decreaseFont()">A-</a></li>
					<li class="font-ctrl"><a class="font-incr-btn" (click)="font.increaseFont()">A+</a></li>
				</ul>
				-->
				<a
					class="navbar-brand"
					style="user-select:none"
					(click)="songList.toggleOpen()"
				>
					<span><b class="glyphicon glyphicon-menu-hamburger"></b></span>
					<!--<span class="hidden-xs">&nbsp;Laululista{{ !currentSong.current ? '' : (' / ' + (!currentSong.current.author ? '' : (currentSong.current.author + ': ')) + currentSong.current.title) }}</span>-->
					<span class="hidden-xs">&nbsp;Laululista{{ !currentSong.current ? '' : (' / ' + currentSong.current.title) }}</span>
				</a>
			</div>
		</div>
	</header>`,
	styles: [
		`@media (max-width: 768px) {
			header.songlist-open .font-ctrl {
				display: none;
 			}
		}`
	]
})
export class AppComponent {
	constructor(
		public songList: SongListService,
		public currentSong: CurrentSongService,
		public loading: LoadingService,
		public font: FontService
	) {}
}

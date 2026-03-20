import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule   } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FontService                  } from './ts/services/font.service';
import { SongsService                 } from './ts/services/songs.service';
import { SongListService              } from './ts/services/song-list.service';
import { CurrentSongService           } from './ts/services/current-song.service'; 
import { ResizeService                } from './ts/services/resize.service'; 
import { LoadingService               } from './ts/services/loading.service'; 

import { AppComponent                 } from './ts/components/app.component';
import { SongMetaComponent            } from './ts/components/song-meta.component';
import { SongViewComponent            } from './ts/components/song-view.component';
import { PlaceholderSongViewComponent } from './ts/components/song-view.component';
import { SongListComponent            } from './ts/components/song-list.component';

/****************************************************************/

@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		SongListComponent,
		SongViewComponent,
		PlaceholderSongViewComponent,
	],
	providers: [
		LoadingService,
		SongsService,
		SongListService,
		CurrentSongService,
		FontService,
		ResizeService,
	],
	exports: [
		FormsModule,
		CommonModule,
		AppComponent,
		SongListComponent,
		SongViewComponent,
		PlaceholderSongViewComponent,
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

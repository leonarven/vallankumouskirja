
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Song, ISongJson } from '../../ts/classes/Song';

import SONGS_INDEX_JSON from '../../songs/dist/index.json';

const SONGS_INDEX_DIR = '/songs/dist';

const SONGS_BY_NUM = {};
const SONGS_OBJ = {};
	
for (let key in SONGS_INDEX_JSON) {
	
	let item = SONGS_INDEX_JSON[ key ]

	if (typeof key == "string") {
	
		if (item.key) {
			key = item.key;
		}

	} else {

		if (item.key) {
			key = item.key;
		} else if (typeof item.title == "string") {
			key = item.title
		} else {
			throw new Error( "Unable to solve key" );
		}
	}

	if (!item.title) item.title = key;

	if (item.num != null) {
		if (SONGS_BY_NUM[ item.num ]) console.warn( `Duplicate num '${ item.num }'`);
		else SONGS_BY_NUM[ item.num ] = item;
	}

	if (SONGS_OBJ[ key ]) throw new Error( `Duplicate key '${ key }'` );

	// Oletetaan laulujen sijainnin olevan relatiivinen
	// @TODO: Tarkista, alkaako polku  ./
	if (item.song_file) item.song_file = `${ SONGS_INDEX_DIR }/${ item.song_file }`;

	item.key = key;

	SONGS_OBJ[ key ] = item;
}

const SONGS_ARR = Object.keys( SONGS_OBJ ).map( k => SONGS_OBJ[ k ] );

const SONGS_INDEX = SONGS_OBJ;

/*
debugger; 

import('../../songs/index.json').then(foo => {

	let asd = Object.keys( foo )[0]

	return import('../../songs/'+asd+'/index.json').then(bar => {
		foo; bar;
		debugger;
	}).catch(e => {
		debugger;
	});
});*/

/*SONGS_ARR.map( key => {
	return import( '../../songs/' + key + '/meta.json').then( meta => {
		debugger;
		console.log( key, meta );
	}).catch(e => {
		console.warn( key, e );
	});
});*/

interface ISongJsonIndex {
	[key: string]: ISongJson;
}

interface ISongIndex {
	[key: string]: Song;
}

@Injectable({
	providedIn: 'root'
})
export class SongsService {
	
	index: ISongIndex;
	sorted: Song[] = [];

	constructor(
		public http: HttpClient
	) {
		this.index = {};

		try {
			this.setIndex( SONGS_INDEX );
		} catch (e) {}
	}

	setIndex( index: ISongJsonIndex ) {

		console.debug( "SongsService.setIndex()", index );

		this.index = {};
		this.sorted = [];

		for (var key in index) {
			if (!index[ key ].disable) {
				this.index[ key ] = new Song( key, index[ key ]);
				this.sorted.push( this.index[ key ] );
			}
		}

		this.sorted.sort(( a: ISongJson, b: ISongJson ) => ((a.num||0) - (b.num||0)));

		console.log( this.sorted)

		return this.index;
	}

	async resolveSongWithLyrics( song: Song ) {

		if (song.lyrics) return song;

/*
		return (song.lyrics
		 ? Promise.resolve( song )
		 : (this.$templateRequest( song.$templateUrl ).then(( lyrics: string ) => {

			song.lyrics = lyrics;

		 });*/

		let song_file = song.song_file || song.$templateUrl;

		if (!song_file) throw new Error( "templateUrl missing!" );

		return this.http.get( song_file, {
			responseType: 'text'
		}).toPromise().then(( lyrics: any ) => {

			song.lyrics = lyrics;

			return song;
		});
	}
}

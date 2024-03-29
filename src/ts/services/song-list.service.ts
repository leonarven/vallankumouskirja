import { ResizeService } from './resize.service'
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SongListService {

	open: boolean = true;

	constructor(
		public resize: ResizeService
	) {}

	toggleOpen() {
		return this.isOpen( !this.open );
	}

	isOpen( isOpen: (null|boolean) = null ) {

		if (isOpen !== null) {
			this.setOpen( isOpen );
		}
		
		return this.open;
	}

	setOpen( isOpen ) {
		
		if (this.open && isOpen) return;
		if (!this.open && !isOpen) return;

		this.open = !!isOpen;
		
		this.resize.$emit( "resize" );
	}
	
	close() {
		return this.isOpen( false );
	}
}

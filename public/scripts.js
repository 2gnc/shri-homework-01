( ()=> {
	'use strict';
	if ('content' in document.createElement('template')) {
		const root = document.querySelector( '.main' );
		const typeS1 = document.getElementById( 'typeS1' );
		const typeS2 = document.getElementById( 'typeS2' );
		const typeM = document.getElementById( 'typeM' );
		const typeL = document.getElementById( 'typeL' );
		
		for ( let i = 0; i < data.length; i++ ) {
			
			const picNum = data[i].image ? parseInt(data[i].image.match(/\d+/)) : null;
			const textColor = data[i].titleColor;
			
			const desc = data[i].description? data[i].description.replace(/\r|\n/g, ' ') : null ;
			function cutter( text ) {
				while ( text.length > 250 ) {
					text = text.substr( 0, 246 ) + ' ...';
				}
				return text;
			}
			const descToDisplay = desc ? cutter( desc ) : null;
			
			if ( data[i].size === 'l' ) {
				typeL.content.querySelector( 'img' ).src = `img/${picNum}@2x.png`;
				typeL.content.querySelector( 'img' ).srcset = `img/${picNum}@2x.png 2x, img/${picNum}@3x.png 3x`;
				typeL.content.querySelector( 'img' ).alt = data[i].title;
				typeL.content.querySelector( 'h2' ).innerText = data[i].title;
				typeL.content.querySelector( 'p' ).innerText = descToDisplay;
				typeL.content.querySelector( 'a' ).style = `color: ${textColor}`;
				root.appendChild(typeL.content.cloneNode(true));
			} else if ( data[i].size === 'm' ) {
				typeM.content.querySelector( 'img' ).src = `img/${picNum}@2x.png`;
				typeM.content.querySelector( 'img' ).srcset = `img/${picNum}@2x.png 2x, img/${picNum}@3x.png 3x`;
				typeM.content.querySelector( 'img' ).alt = data[i].title;
				typeM.content.querySelector( 'h2' ).innerText = data[i].title;
				typeM.content.querySelector( 'p' ).innerText = descToDisplay;
				typeM.content.querySelector( 'a' ).style = `color: ${textColor}`;
				root.appendChild(typeM.content.cloneNode(true));
			} else if ( data[i].size === 's' && !data[i].image ) {
				typeS1.content.querySelector( 'h2' ).innerText = data[i].title;
				typeS1.content.querySelector( 'p' ).innerText = descToDisplay;
				typeS1.content.querySelector( 'a' ).style = `color: ${textColor}`;
				root.appendChild(typeS1.content.cloneNode(true));
			} else {
				typeS2.content.querySelector( 'img' ).src = `img/${picNum}@2x.png`;
				typeS2.content.querySelector( 'img' ).srcset = `img/${picNum}@2x.png 2x, img/${picNum}@3x.png 3x`;
				typeS2.content.querySelector( 'img' ).alt = data[i].title;
				typeS2.content.querySelector( 'h2' ).innerText = data[i].title;
				typeS2.content.querySelector( 'a' ).style = `color: ${textColor}`;
				root.appendChild(typeS2.content.cloneNode(true));
			}
		}
	} else {
		let warning = document.createElement( 'div' );
		warning.innerText = 'Очень жаль, но Ваш браузер не может отобразить этот сайт. Попробуйте установить что-нибудь другое, например Яндекс Браузер' ;
		document.querySelector('body').appendChild( warning );
	}
} )();
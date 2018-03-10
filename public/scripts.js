( ()=> {
	'use strict';
	if ('content' in document.createElement('template')) {
		const typeS1 = document.getElementById( 'typeS1' );
		const typeS2 = document.getElementById( 'typeS2' );
		const typeM = document.getElementById( 'typeM' );
		const typeL = document.getElementById( 'typeL' );
		console.log(typeS1);
		const content = data.map( ( item ) => {
			if ( item.size === 'l' ) {
				//большая
				
			} else if ( item.size === 'm' ) {
				//средняя
				
			} else if ( item.size === 's' && !item.image ) {
				//мал без картики S1
				
			} else {
				//мал без описания S2
				
			}
		} );
		
	} else {
		let warning = document.createElement( 'div' );
		warning.innerText = 'Очень жаль, но Ваш браузер не сможет отобразить этот сайт. Попробуйте установить что-нибудь другое, например Яндекс Браузер' ;
		document.querySelector('body').appendChild( warning );
	}
} )();
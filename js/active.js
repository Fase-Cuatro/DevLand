let str1 = window.location.pathname;
let str2 = str1.substr(1);
console.log(str2);
switch(str2) {
	case 'index.php':
		$('#nav_inicio').addClass("active");
		break;	
	case 'nosotros.php':
		$('#nav_nosotros').addClass("active");
		break;	
	case 'covid.php':
		$('#nav_covid').addClass("active");
		break;	
	case 'obrassociales.php':
		$('#nav_obrassociales').addClass("active");
		break;
	case 'contacto.php':
		$('#nav_contacto').addClass("active");
		break;
	default:
		$('#nav_inicio').addClass("active");
		break;
}
var str = '{name: John Doe}';


try {

	var obj = JSON.parse(str);
	console.log('obj.name', obj.name);

} catch (e) {
	alert('Wrong data, try to refresh the page');
}
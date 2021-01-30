const chars = {a:2,b:2,c:2,d:3,e:3,f:3,g:4,h:4,i:4,j:5,k:5,l:5,m:6,n:6,o:6,p:7,q:7,r:7,s:7,t:8,u:8,v:8,w:9,x:9,y:9,z:9};
window.onload = ()=> {
	$('#input').keydown(()=> {
		let input = $('#input').val().toLowerCase();
		let output = '';
		for(let c of input) {
			if(c in chars)
				output += chars[c];
			else if(c in [0,1,2,3,4,5,6,7,8,9])
				output += c;
		}
		$('#output').html(output);
	}).keydown().select();
};
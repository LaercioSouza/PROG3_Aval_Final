
key = true

function view(event){
	if(key == true){
		const xhr = new XMLHttpRequest()
		xhr.open('POST','/dados', true)
		xhr.onload = (event)=>{
		clique(xhr, event)

		}
		const algo = 10
		xhr.send(algo)
	}

	if(key == false){
		
		window.location.reload();
	
		
		key = true
	}
}

function clique(xhr, event){
	key = false
	if(xhr.status != 200){
		return
	}

	const data = JSON.parse(xhr.response)
	const img = document.getElementById('load')
	data.forEach((dados) =>{	
		
	 	date = dados.date
	 	
		const imagem = document.createElement('tr')
		
		imagem.innerHTML = `<td>${dados.title}</td> <td> <img  onclick = 'clickimage()'src = ${dados.url} width = '1080' height = '300'> </td>`
		img.appendChild(imagem)	
		
	})
}

function clickimage(event){
	const xhr = new XMLHttpRequest()
	xhr.open('POST', '/image_dado', true)

	xhr.onload = (event) =>{
		posclick(xhr, event)
	}
	const algo = 10
	xhr.send(algo)

}

function posclick(xhr, event){

		if(xhr.status != 200){
			return
	}
		const data = JSON.parse(xhr.response)
		const img = document.getElementById('loading')
		data.forEach((dados) =>{	
		
	 	date = dados.date
	 	
		const imagem = document.createElement('tr')

		imagem.innerHTML = `<td> <img width = '200px', 'height = '300px'src = ${dados.url}> </td> <tr> <td> ${dados.title}</td> </tr> <tr> <td> ${dados.explanation}</td> </tr>
		<tr> <td> ${dados.copyright}</td> </tr> <tr> <td> ${dados.date}</td></tr>`

		img.appendChild(imagem)	
		
	})
}







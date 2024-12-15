// your code here
let btn=document.getElementById('button')
btn.addEventListener("click",()=>{
	let name=document.getElementById('name').value
	let year=document.getElementById('year').value
	let url=document.getElementById('url')
	let baseurl="https://localhost:8080/"
	let addurl=new URLSearchParams({ name, year }).toString()
	url.textContent= `${baseurl}?${addurl}`
})
let attractions;

fetch('./attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		filterData("all");
	});

function filterData(category) {
	let filteredAttractions;
	category === "all" ? 
		filteredAttractions = attractions : 
		filteredAttractions = attractions.filter(attraction => attraction.Category === category)
	filteredAttractions.sort((a,b)=> b.Visitors-a.Visitors);
	const data = filteredAttractions.slice(0,5);
	renderBarChart(data);
}


function DropdownClickHandler() {
	let filteredCategory = document.querySelector('#attraction-category').value;
	filterData(filteredCategory);
}
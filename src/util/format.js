export const formatTitle = (name) =>{
	return name?.replace("_", " ").split(" ")
			.map((word) => word ? word[0].toUpperCase() + word.slice(1) : "")
			.join(" ").replace(/\.(jpg|jpeg|png|webp)$/i,'');
}


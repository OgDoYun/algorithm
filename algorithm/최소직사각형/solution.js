function solution(sizes) {
	let biggestOne = Math.max(...sizes.flat())
	let smallerAxles = []
	sizes.forEach((size) => {
	    if(size[0] < size[1]) smallerAxles.push(size[0])
	    else if(size[0] > size[1]) smallerAxles.push(size[1])
	    // same
	    else smallerAxles.push(size[0])
	})
    
	let biggestOfSmallerAxles = Math.max(...smallerAxles)
	return biggestOne * biggestOfSmallerAxles
    }
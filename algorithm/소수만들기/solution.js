function solution(nums) {
	let answer = 0;
	for(let i=0;i<nums.length;i++) {
	    const idx1 = nums[i]
	    for(let j=i+1;j<nums.length;j++) {
		const idx2 = nums[j]
		for(let k=j+1;k<nums.length;k++) {
		    const idx3 = nums[k]
		    if(isPrime(idx1, idx2, idx3)) answer++;
		}
	    }
	}
	return answer;
    }
    function isPrime(idx1, idx2, idx3) {
	const num = idx1 + idx2 + idx3
	for(let i=2;i<num;i++) {
	    if(num % i === 0) return false;
	    }
	return true;
	
    }
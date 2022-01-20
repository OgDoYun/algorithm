function solution(nums) {
    const set = new Set()
    nums.forEach((num) => {
        set.add(num)
    })
    return parseInt(nums.length/2) < set.size ? parseInt(nums.length/2) : set.size;
}
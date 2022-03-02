function solution(answers) {
    var answer = [];
    const supojas = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    const scores = [0, 0, 0]
    for(let i=0;i<supojas.length;i++) {
        for(let j=0;j<answers.length;j++) {
            if(answers[j]===supojas[i][j%supojas[i].length]) {
                scores[i] = scores[i] + 1
            }
        }   
    }
    const max = Math.max(...scores)
    for(let i=0;i<scores.length;i++) {
        if(max===scores[i]) {
            answer.push(i+1)
        }
    }

    return answer;
}
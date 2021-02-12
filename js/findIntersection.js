// Using hash tables (uses more space to lower complexity)

const findIntersection = (strArr) => {

    const lists = strArr.map(str => str.split(', '));
    const firstList = lists[0];
    const secondList = lists[1];

    let matchMap = {};

    let resultsArray = [];

    firstList.forEach(num => matchMap[num] = true);

    secondList.forEach(num => {
        if(matchMap[num]){
            resultsArray.push(num);
        }
    });

    if (resultsArray.length > 0){
        return resultsArray.join(", ")
    }
    return false;

}


const strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

findIntersection(strArr);


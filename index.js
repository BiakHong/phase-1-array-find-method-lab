// code your solution here
function superbowlWin(arg){
    function callBack(year){
        return year.result === "W";
    }
    const winningYear = arg.find(callBack);
        if(winningYear){
            return winningYear.year
        }
}
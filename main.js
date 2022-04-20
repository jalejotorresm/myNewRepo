

function transit_tracker(miles){
    let transit1=(24*miles)/500; 
    let transit2=(24*miles)/600; 

    function transitTime(transitA, transitB){
        const minTime=transitB;
        const maxTime=transitA;

        let minDays=Math.floor(minTime/24);
        let minHours=Math.floor(minTime-(minDays*24));
        let minMinutes=Math.floor((minTime*60)%60);
        let minSeconds=Math.floor(minTime*3600)%60;

        let maxDays=Math.floor(maxTime/24);
        let maxHours=Math.floor(maxTime-(maxDays*24));
        let maxMinutes=Math.floor((maxTime*60)%60);
        let maxSeconds=Math.floor(maxTime*3600)%60;

        alert('Calculation for a load of '+mileNum+' miles:\n\nMinimum amount of time taken:\n'+minDays+' day(s), '+minHours+' hours, '+minMinutes+' minutes and '+minSeconds+' seconds\n\nMaximum amount of time taken:\n'+maxDays+' day(s), '+maxHours+' hours, '+maxMinutes+' minutes and '+maxSeconds+' seconds');
    }
    transitTime(transit1, transit2);
}
let mileage=prompt('Transit Calculator for Loads within the US\nPlease give me a mileage amount:\n');
const mileNum=parseInt(mileage);
transit_tracker(mileNum);
const endDate="10 september 2023 12:36 PM";
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input");
function clock(){
    const end=new Date(endDate);
    const now =new Date()
    // console.log(end);
    // console.log(now);
    const diff=(end-now)/1000;
    // console.log(diff);
    if(diff<0){
        return;
    }
//  converts into days
inputs[0].value=(Math.floor(diff/3600/24));
// converts into hrs
inputs[1].value=Math.floor(diff/3600)%24;
// converts into minutes
inputs[2].value=(Math.floor(diff/60)%60);
// converts into seconds
inputs[3].value=(Math.floor(diff)%60);
}
clock();




// 1 day=24 hrs
// 1hrs=60 min
// 60 min=360 sec
setInterval(
    ()=>{
        clock();
    },
    1000
)
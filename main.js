setInterval(()=>{
    //get time indicator elements
    let hours= document.getElementById('hours');
    let minutes= document.getElementById('minutes');
    let seconds= document.getElementById('seconds');
    let ampm= document.getElementById('ampm');

    //get digits time indicator
    let hh= document.getElementById('hh');
    let mm= document.getElementById('mm');
    let ss= document.getElementById('ss');
    

    //get dots indicator
    let h_dot= document.querySelector('.h-dot');
    let m_dot= document.querySelector('.m-dot');
    let s_dot= document.querySelector('.s-dot');
    //getting current time
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ap= h>=12? 'PM': 'AM';

    //convert to 12 hour format
    if(h>12){
        h= h-12;
    }
    //adding 0 before digits
    h= h<10 ? '0'+ h: h;
    m= m<10 ? '0'+m: m;
    s= s<10 ? '0'+s: s;

    //set time labels
    hours.innerHTML= h+ 'Hours';
    minutes.innerHTML= m+ 'Minutes';
    seconds.innerHTML= s+ 'Seconds';
    ampm.innerHTML= ap;

    //set time circular indicator
    hh.style.strokeDashoffset= 440-(440*h)/ 12;
    mm.style.strokeDashoffset= 440- (440*m)/ 60;
    ss.style.strokeDashoffset= 440- (440*s)/60;

    //set dot time position indicator
    h_dot.style.transform= `rotate(${h*30}deg)`;
    m_dot.style.transform=  `rotate(${m* 6}deg)`;
    s_dot.style.transform= `rotate(${s*6}deg)`;
}, 1000);
import{d as f}from"./index.de5afc43.js";import{u as g,a as c,b as h,c as p,d as x,e as y,f as b,g as $,h as v,j as A,k as j,l as k,m as L,i as _}from"./echarts.ccfeb3ce.js";function T(a){let i=a.concat();for(let s=0;s<a.length;s++)i[s]=a.slice(0,s+1).reduce(function(n,e){return n+e});return i}function z(a,i){let s={title:{left:"center",text:"Top 10 "+(a==="teams"?"Teams":"Users")},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{type:"scroll",orient:"horizontal",align:"left",bottom:35,data:[]},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},saveAsImage:{}}},grid:{containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value"},dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",height:20,top:35,fillerColor:"rgba(233, 236, 241, 0.4)"}],series:[{type:"bar"}]};const n=Object.keys(i);let e=[],m=[];for(let o=0;o<n.length;o++)e.push(i[n[o]].name),m.push(i[n[o]].score);return s.xAxis.data=e,s.series[0].data=m,s}function I(a,i,s){const n=Object.keys(a);let e=[],m=10;for(let o=0;o<(n.length>=m?m:n.length);o++){let t=a[n[o]].solves;console.log(t);for(let l=0;l<t.length;l++){t[l].team_name=a[n[o]].name,t[l].user_name=i[t[l].user_id],t[l].challenge_name=s[t[l].challenge_id];let u=f()-f(t[l].date);u/(1e3*60*60*24)>=2?t[l].time="il y a "+Math.floor(u/(1e3*60*60*24))+" jours":u/(1e3*60*60)>=2?t[l].time="il y a "+Math.floor(u/(1e3*60*60))+" heures":u/(1e3*60)>=2?t[l].time="il y a "+Math.floor(u/(1e3*60))+" minutes":t[l].time="il y a moin de 2 minutes";for(let r=e.length;r>0;r--)if(f(t[l].date)>f(e[r-1].date)){let d=e[r-1];e[r-1]=t[l],r<m&&(e[r]=d)}else if(e.length<m&&e.length==r){e.push(t[l]);break}else break;e.length==0&&e.push(t[l])}}return e}g([c,h,p,x,y,b,$,v,A,j,k,L]);function Z(a,i){let s=_(a);s.setOption(i),window.addEventListener("resize",()=>{s&&s.resize()})}export{I as a,T as c,Z as e,z as g};

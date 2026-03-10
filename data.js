// ===== APEX RACING — SHARED DATA =====

const CARS = [
  { id:'ferrari',     name:'Ferrari',      model:'LaFerrari',          file:'models/ferrari.glb',     speed:98, accel:97, handle:90, brake:92, weight:'1,255 kg', power:'950 hp',  topSpeed:350, accelSec:2.9, skill:97, color:'#cc1100', scale:0.018, yOff:0,    rotY:Math.PI },
  { id:'maserati',    name:'Maserati',     model:'MC20',               file:'models/maserati.glb',    speed:88, accel:85, handle:89, brake:87, weight:'1,470 kg', power:'630 hp',  topSpeed:325, accelSec:2.9, skill:86, color:'#e8e8e8', scale:0.018, yOff:0,    rotY:Math.PI },
  { id:'mclaren',     name:'McLaren',      model:'P1',                 file:'models/mclaren.glb',     speed:96, accel:96, handle:95, brake:95, weight:'1,395 kg', power:'903 hp',  topSpeed:350, accelSec:2.8, skill:96, color:'#8ab4c8', scale:0.018, yOff:0,    rotY:Math.PI },
  { id:'bentley',     name:'Bentley',      model:'Continental GT',     file:'models/bentley.glb',     speed:90, accel:78, handle:74, brake:76, weight:'2,244 kg', power:'626 hp',  topSpeed:335, accelSec:3.6, skill:74, color:'#1a1a2e', scale:0.018, yOff:0,    rotY:Math.PI },
  { id:'lamborghini', name:'Lamborghini',  model:'Aventador SVJ',      file:'models/lamborghini.glb', speed:95, accel:93, handle:88, brake:90, weight:'1,525 kg', power:'770 hp',  topSpeed:350, accelSec:2.8, skill:92, color:'#c8a060', scale:0.018, yOff:0,    rotY:Math.PI },
  { id:'aston',       name:'Aston Martin', model:'Vantage',            file:'models/aston.glb',       speed:87, accel:80, handle:82, brake:83, weight:'1,760 kg', power:'503 hp',  topSpeed:314, accelSec:3.5, skill:80, color:'#607080', scale:0.018, yOff:0,    rotY:Math.PI },
];

const CIRCUIT = {
  id:'start_track', name:'Start Track', file:'models/track.glb',
  length:'4.2 km', turns:8, record:'1:32.000', country:'Circuit'
};

// shared state
const State = {
  set(k,v){ try{ sessionStorage.setItem('apex_'+k, JSON.stringify(v)); }catch(e){} },
  get(k)  { try{ return JSON.parse(sessionStorage.getItem('apex_'+k)); }catch(e){ return null; } },
};

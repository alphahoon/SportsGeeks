var m = '{"aa": [{"bb": "11"}, {"bb": "22"}]}'
var m1 = JSON.parse(m);
var m3 = [];
console.log(m1.aa[0].bb);
try{
  m3.push(m1.cc)
}catch(e){
  console.log('Error while adding teams keywords.');
}
if (m1.aa){
  console.log("it's true")
}
console.log(m1.cc == undefined)

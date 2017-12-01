let local;

function log(data){
  console.log('You requested a console log **************************',data)

}

function getLocal(){
  return local;
}


module.exports = {log,getLocal};
function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};

function Notes() {
  this.data = [];
}

Notes.prototype.add = function (note) {
  if(note instanceof Note){
    this.data.unshift(note);
  }else{
    throw "error";
  }
};

Notes.prototype.toString = function (notes) {
  for ( var i = 0; i < notes.length ; i++){
    console.log(note.toString() + '\n' + );
  }
};

module.exports = {'Notes' : Notes ; 'node' : node};
const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message:[]});
notesCtrl.createNote = (req, res) => res.json({message:'Note saved!'});
notesCtrl.getNote = (req, res) => res.json({title:'GET Request'});
notesCtrl.updateNote = (req, res) => res.json({message:'PUT Request'});
notesCtrl.deleteNote = (req, res) => res.json({message:'DELETE Request'});


module.exports = notesCtrl;
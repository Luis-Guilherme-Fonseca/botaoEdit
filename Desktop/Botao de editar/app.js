function note(text) {
    this.text = String(text);
    this.getElement = function(){
        var row = document.createElement('tr');
        var cell = document.createElement('td');

        var div = document.createElement('div');
        div.className += 'input-group';

        var para = document.createElement('p');
        para.innerHTML = this.text;

        var span = document.createElement('span');
        span.className += 'input-group-btn';

        var edit = document.createElement('button');
        edit.className += 'btn btn-warning btn-sm';
        edit.innerHTML = 'edit';
        edit.addEventListener('click', Edit.bind(row));

        var button = document.createElement('button');
        button.className += 'btn btn-danger btn-sm';
        button.innerHTML = 'X';
        button.addEventListener('click', remove.bind(row));

        span.appendChild(edit);
        span.appendChild(button);
        div.appendChild(para);
        div.appendChild(span);
        cell.appendChild(div);
        row.appendChild(cell);

        return row;
    };
}
function remove(){
    var notes = document.getElementById('notes');

    notes.removeChild(this);
}

function Edit() {
    var text, input;
    var notes = document.getElementById('notes');

	//console.log(notes1.getAttribute(p));
    console.log(this);
    text = notes.getElementsByTagName('p')[0];
    console.log(text);

    notes.removeChild(this);
    input = document.createElement('input');
    input.id = 'notes2';
    input.value = text.innerHTML;

    var save = document.createElement('button');
    save.className += 'btn btn-primary btn-sm';
    save.innerHTML = 'save';
    save.addEventListener('click', Save.bind(input));
    save.addEventListener('click', remove.bind(input));
    save.addEventListener('click', remove.bind(save));

    notes.appendChild(input);
    notes.appendChild(save);

}

function Save(){
    console.log('button clicked');
    var n = new note(document.getElementById('notes2').value);

    if(n.text){
        var notes = document.getElementById('notes');
        notes.appendChild(n.getElement());
    }
}

function add(){
    console.log('button clicked');
    var n = new note(document.getElementById('note-input').value);

    if(n.text){
        var notes = document.getElementById('notes');
        notes.appendChild(n.getElement());
    }
}

document.getElementById('add').addEventListener('click', add);

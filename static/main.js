let player = new Player("Citizen");

function startGame(_class) {
    player.setClass(_class);

    popupOff("initial-message");
    fillStats();
}

function popupOff(_element_id) {
    let _element = document.getElementById(_element_id);
    _element.style.display = "none";

    let _popup = document.getElementById("popup-container");
    _popup.style.display = "none";
}

function fillStats() {
    let _stats = document.getElementById("stats").getElementsByClassName("inner")[0];
    
    const newField = (_name, _value) => {
        let _field = document.createElement("DIV");
        _field.classList.add("stats-field");

        let _name_field = document.createElement("LABEL");
        _name_field.setAttribute("for", `stats-${_name}`);
        _name_field.innerHTML = _name;
        
        let _value_field = document.createElement("SPAN");
        _value_field.id = `stats-${_name}`;
        _value_field.innerHTML = _value;

        _field.appendChild(_name_field);
        _field.appendChild(_value_field);

        return _field;
    }

    _stats.appendChild(newField("Classe", player.class));
    _stats.appendChild(newField("Vida", player.health));
    _stats.appendChild(newField("Força", player.strenght));
    _stats.appendChild(newField("Defesa", player.defence));
    _stats.appendChild(newField("Agilidade", player.agility));
    
    _stats.appendChild(document.createElement("BR"));
    _stats.appendChild(newField("Energia", player.energy));
    _stats.appendChild(newField("Montaria", "-"));
    
    _stats.appendChild(document.createElement("BR"));
    _stats.appendChild(newField("Level", player.level));
    let _level_bar = document.createElement("PROGRESS");
    _level_bar.id = "stats-xp";
    _level_bar.setAttribute("value", player.xp);
    _level_bar.setAttribute("title", `${player.xp}/100`);
    _level_bar.setAttribute("max", 100);
    _stats.appendChild(_level_bar);
}
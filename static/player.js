class Player {
    constructor(_class) {
        this.class    = _class;
        this.health   = 20;
        this.strenght = 5;
        this.defence  = 0;
        this.agility  = 5;

        this.energy = 10;
        this.mount  = null;

        this.xp    = 50;
        this.level = 1;
    }

    setClass(_class) {
        switch(_class) {
            case "knight":
                this.class = _class;

                break;
            case "archer":
                this.class = _class;

                break;
            default:
                return undefined;
        }
    }
}
class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(i) {
        if (i >= 0 && i < this.tipo.length) {
            let attack;

            switch (this.tipo[i]) {
                case "guerreiro":
                    attack = "espada"
                    break

                case "mago":
                    attack = "magia"
                    break

                case "monge":
                    attack = "artes marciais"
                    break

                case "ninja":
                    attack = "shuriken"
                    break

                default:
                    attack = "ataque indefinido";
            }

            console.log(`o ${this.tipo[i]} ${this.nome} atacou usando ${attack}`)
        }

    }
}
let heroi = new hero("Reache", "35", ["guerreiro", "mago", "monge", "ninja"])
heroi.atacar(0)
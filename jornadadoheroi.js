class Hero
{
    constructor(nomeFunc, idadeFunc, tipoFunc)
    {
        this.nome = nomeFunc;
        this.idade = idadeFunc
        this.tipo = tipoFunc
    }


    atacar()
    {
        let ataque;

        if(this.tipo == "mago" || this.tipo == "Mago" )
        {
            ataque = "magia"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        }

        else if(this.tipo == "guerreiro" || this.tipo == "Guerreiro" )
        {
            ataque = "espada"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        }

        else if(this.tipo == "monge" || this.tipo == "Monge" )
        {
            ataque = "artes marciais"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        }

        else if(this.tipo == "ninja" || this.tipo == "Ninja" )
        {
            ataque = "shuriken"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        }

        else
        {
            console.log("Desculpe, esse tipo de herói não é um tipo válido.")
        }

    }

}

let Ban = new Hero("Ban", "21 anos", "Arqueiro")

Ban.atacar();



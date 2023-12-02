//TODO: quebrar em vários arquivos
class ComponenteBase {
    #tag
    #template
    #marcadorDeConteudo
    #componentes
    constructor(tag){
        this.#tag = tag
        this.#componentes = []
        this.#marcadorDeConteudo = "{{#conteudo}}"
        this.#template = `<${this.#tag}>${this.#marcadorDeConteudo}</${this.#tag}>`
    }

    #listaComponentesHTML(componentes){
        return componentes.map(
            elemento => typeof elemento == "object" ? elemento.gerarHTML() : elemento)
    }

    #conteudoHtml(elementosHTML){
        return elementosHTML.join("")
    }

    #adicionaConteudo(conteudo){
        return this.#template.replace(this.#marcadorDeConteudo, conteudo)
    }

    adicionaComponente(componente){
        this.#componentes.push(componente)
    }

    gerarHTML(){
        let listaComponentesHTML = this.#listaComponentesHTML(this.#componentes)
        let conteudoHtml = this.#conteudoHtml(listaComponentesHTML)
        return this.#adicionaConteudo(conteudoHtml) 
    }
}

class ListaOrdenada extends ComponenteBase {
    constructor(){
        super("ul")
    }
}

class ElementoDeLista extends ComponenteBase {
    constructor(){
        super("li")
    }
}

class Titulo extends ComponenteBase {
    constructor(){
        super("h1")
    }
}
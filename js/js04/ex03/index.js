import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"


const title = new Component("h1", "body", { textContent: "Olá mundo!"})
console.log(title)
title.render()

title.tag = "a"
title.biuld().render()

const br = new Component("br")
const form = new Form("body")
const label = new Label("Nome: ", form, { htmlFor: "nameInput", id: "nameInput"})
const input = new Input(form, { id: "nameInput", name: "name"})

console.log(br)
form.addChildren(br, br)
form.render()
label.render()
input.render()


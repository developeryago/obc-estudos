export const label = (attributes) =>{
    const element = document.createElement("label")
   Object.assign(element, attributes)
   return element
}

export const input = (attributes) =>{
   const element = document.createElement("input")
   Object.assign(element, attributes)
   return element
}

export const br = () => document.createElement("br")
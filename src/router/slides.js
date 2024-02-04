export default [
    {
        "name": "Intro",
        "path": "/intro",
        "content": `
        # Yo quiero a mis amigos
        ## Y a mi familia

        - Uno
        - Dos
        - Tres
        - Cuatro

        \`\`\`javascript
        console.log('Hola mundo')
        \`\`\`
        `.split('\n').map((line) => line.trim()).join('\n')
    },
    {
        "name": "Installation",
        "path": "/about",
        "content": "# This is the about page\nI am god \n\n Run `npm create vite@latest` to initialize a new project"
    },
    {
        "name": "Soy dios?",
        "path": "/pregunta",
        "content": "# Soy dios?\n\nNo, soy un simple mortal"
    }
]
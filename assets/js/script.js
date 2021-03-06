/**
 * =========================================
 *              Setup du projet
 * =========================================
 */
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth; //adapte la longueur à la taille de l'écran
canvas.height = window.innerHeight; //adapte la hauteur à la taille de l'écran

/**
 * =========================================
 *            Création du joueur
 * =========================================
 */
class Player {
    constructor() {
        this.velocity = {
            x:0, 
            y:0 
        }

        this.rotation = 0;

        const image = new Image()
        image.src = 'assets/img/vaisseau-spatial.png'
        image.onload = () => {
            const scale = 0.55
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale

            this.position = {
                x : canvas.width / 2 - this.width / 2,
                y : canvas.height - this.height - 20
            }
            
        }

        
    }
    draw () {
        c. save()
        c.translate(
            player.position.x + player.width / 2, 
            player.position.y + player.width / 2
        )
        c.rotate(this.rotation)
        c.translate(
            -player.position.x - player.width / 2, 
            -player.position.y - player.width / 2
        )

        c.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height)

        c.restore()
    }

    update () {
        if(this.image) {
            this.draw()
            this.position.x += this.velocity.x
        }
    }
}

/**
 * =========================================
 *            Création des projectiles
 * =========================================
 */

class Projectiles {
    constructor ({position, velocity}) {
        this.position = position
        this.velocity = velocity

        this.radius  = 3
    }
    draw () {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2)
        c.fillStyle='red'
        c.fill()
        c.closePath()
    }
    update () {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

/**
 * =========================================
 *            Création des 'particules'
 * =========================================
 */

class Particle {
    constructor({position, velocity, radius, color}) {
        this.position = position
        this.velocity = velocity

        this.radius = radius
        this.color = color
        this.opacity = 1
    }

    draw() {
        c.save()
        c.globalAlpha = this.opacity
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
        c.restore()
    }
}

/**
 * =========================================
 *            Création des 'envahiseurs'
 * =========================================
 */

class Invader {
    constructor({position}) {
        this.velocity = {
            x:0, 
            y:0 
        }

        const image = new Image()
        image.src = 'assets/img/asteroide.png'
        image.onload = () => {
            const scale = 1
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x : position.x,
                y : position.y
            }
            
        }

        
    }
    draw () {
        c.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height)

        c.restore()
    }

    update ({velocity}) {
        if(this.image) {
            this.draw()
            this.position.x += velocity.x
            this.position.y += velocity.y
        }
    }
}

/**
 * =========================================
 *            Création de la grille
 * =========================================
 */

class Grid {
    constructor() {
        this.position = {
            x:0,
            y:0
        }
        this.velocity = {
            x:3, 
            y:0
        }

        this.invaders = []

        const rows = Math.floor(Math.random() * 5 + 2)
        const columns = Math.floor(Math.random() * 10 + 5)

        this.width = columns * 30

        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
                this.invaders.push(
                    new Invader({
                    position: {
                        x: x * 30, 
                        y: y * 30
                    }
                })
            )
        }
    }
    console.log(this.invaders);
    }
    update () {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.velocity.y = 0

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
            this.velocity.x = -this.velocity.x
            this.velocity.y = 30
        }
        
    }
}

/**
 * =========================================
 *       Animation des éléments du jeu 
 * =========================================
 */

const player = new Player()
const projectiles = []
const grids = []
const keys = {
    a: {
        pressed:false
    },
    d: {
        pressed:false
    },
    space: {
        pressed:false
    }
}

let frames = 0

let randomInterval = Math.floor((Math.random() * 500) + 500)

/**
 * @function createParticles()
 */

function createParticles({object, color}) {
    for (let i = 0; i < 15; i++) {
        Particle.push(
            new Particle({
                position: {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height
                }, 
                velocity:{
                    x:0,
                    y:1
                },
                radius: Math.random()*3,
                color: 'white'
            })
        )
        
    }
}

/**
 * @function animate()
 * permet d'afficher le vaisseau à l'écran
 */
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    projectiles.forEach((projectile, index) => {
        if (projectile.position.x + projectile.radius <= 0 ) {
            setTimeout(() => {
                projectiles.splice(index, 1)
            }, 0)
            
        } else {
            projectile.update()
        }
    })

    grids.forEach (grid => {
        grid.update()
        grid.invaders.forEach(invader => {
            invader.update({velocity: grid.velocity})

            projectiles.forEach((projectile, j) => {
                if (
                    projectile.position.y - projectile.radius <= invader.position.y + invader.height && 
                    projectile.position.x + projectile.radius >= invader.position.x &&
                    projectile.position.x - projectile.radius <= invader.position.x
                ) {
                    setTimeout(() => { 
                        const invaderFound = grid.invader.find(invader2 => {
                            return invader2 === invader
                        })
                        if (invaderFound) {
                            grid.invaders.splice(i, 1)
                            projectiles.splice(j, 1)
                        }
                    }, 0)
                }
            })
        })
    })

    if (keys.a.pressed && player.position.x >= 0) {
        player.velocity.x = -7;
        player.rotation = -0.15
    } else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
        player.velocity.x = 7;
        player.rotation = 0.15
    } else {
        player.velocity.x = 0;
        player.rotation = 0
    }

    if (frames % randomInterval === 0) {
        grids.push(new Grid())
        randomInterval = Math.floor((Math.random() * 500) + 500)
    }
    frames++
}
animate()

/**
 * =========================================
 *     Mouvement du joueur + projectiles
 * =========================================
 */

addEventListener('keydown', ({key}) => {
    switch(key) {
        case 'a':
            console.log('left')
            keys.a.pressed = true
            break
        case 'd':
            console.log('right')
            keys.d.pressed = true
            break
        case ' ':
            console.log('space')
            projectiles.push(
                new Projectiles({
                    position: {
                        x:player.position.x + player.width / 2,
                        y:player.position.y
                    },
                    velocity: {
                        x:0,
                        y:-10
                    }
                })
            )
        //console.log(projectiles)
        break
    }
})

addEventListener('keyup', ({key}) => {
    switch(key) {
        case 'a':
            console.log('left')
            keys.a.pressed = false
            break
        case 'd':
            console.log('right')
            keys.d.pressed = false
            break
        case ' ':
            console.log('space')
            break
    }
})

/**
 * =========================================
 *         Création du ciel étoilé
 * =========================================
 */

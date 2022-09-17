const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity = 0.5
class Player 
{
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x:0,
            y:1
        }
        this.width = 40
        this.height = 40
    }

    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y,
            this.width,this.height)
    }
    
    update()
    {
        this.position.y += this.velocity.y
        this.draw()

        this.velocity.y += gravity
    }
}

const player = new Player()

player.update()

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
}

animate()
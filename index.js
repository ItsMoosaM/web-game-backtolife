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
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

class Platform {
    
}

const player = new Player()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

player.update()

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()

    if (keys.right.pressed) {
        player.velocity.x = 5
    } else if (keys.left.pressed) {
        player.velocity.x = -5
    } else player.velocity.x = 0
    
}

animate()

window.addEventListener('keydown', ({ key }) => {
    console.log(key)

    switch (key) {
        case 'a':
            console.log("left")
            keys.left.pressed = true
            break

        case 'd':
            console.log("right")
            keys.right.pressed = true
            break

        case 'w':
                console.log("up")
                player.velocity.y -= 20
                break

            case 's':
                console.log("down")
                break
    }
})

window.addEventListener('keyup', ({ key }) => {
    console.log(key)

    switch (key) {
        case 'a':
            console.log("left")
            keys.left.pressed = false
            break

        case 'd':
            console.log("right")
            keys.right.pressed = false
            break

        case 'w':
                console.log("up")
                break

            case 's':
                console.log("down")
                break
    }
})
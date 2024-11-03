namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 5 5 5 . . . . 
        . . 2 2 2 2 2 2 2 2 2 4 5 . . . 
        . . 2 2 2 2 2 2 2 2 2 4 5 . . . 
        . . . 2 2 2 2 2 2 2 4 4 . . . . 
        . . . . 2 2 2 2 2 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 201, 5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    game.setGameOverEffect(true, effects.slash)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.trail, 500)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 f f f f 5 . . . . . . 
        . . 9 9 5 5 5 5 5 5 9 9 . . . . 
        . . 9 9 5 f f f f 5 9 9 . . . . 
        . . 9 9 9 f f f f 9 9 9 . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . 5 f f 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 9 9 9 f f f f 9 9 9 . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . 5 f f 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    bee.setPosition(mySprite.x + 80, mySprite.x + 80)
    bee.follow(mySprite, 90)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(7)
    sprites.destroy(orb)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (mySprite.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let bee: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
let coin: Sprite = null
let orb: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ............................................................................................................c...................................................
    ............................................................................................................c...................................................
    ...........................................................................................................cc...................................................
    ...................1.......................................................................................cc...................................................
    ...................1......................................................................................c.c...................................................
    ...................1......................................................................................c.c...................................................
    ..................11......................................................................................c.c...................................................
    ..................11......................................................................................c.c...................................................
    ..................11......................................................................................c.c...................................................
    .................111......................................................................................c.c...................................................
    ..........1......1111.....................................................................................c.c...................................................
    ...........11111111111....................................................................................c.c...................................................
    .............11111111111.................................................................................ccc....................................................
    ..............11111......................................................................................ccc....................................................
    ................111......................................................................................ccc....................................................
    .................11.....................................................................................cccc....................................................
    ....................................................c...................................................cccc....................................................
    ....................................................c...................................................cccc....................................................
    ....................................................c...................................................cccc....................................................
    ...................c................................c..................................................ccccc....................................................
    ...................c................................c..................................................ccccc....................................................
    ...................c................................c..................................................ccccc....................................................
    ...................c................................c..................................................ccccc....................................................
    ...................c................................c.................................................cccccc....................................................
    ..................cc...............................cc.................................................cccccc............................................c.......
    ..................cc...............................cc.................................................cccccc...........................................cc.......
    ..................cc...............................cc.................................................cccccc...........................................cc.......
    ..................cc...............................c.................................................ccccccc...........................................cc.......
    ..................cc...............................c.................................................ccccccc...........................................cc.......
    ..................cc..............................cc.................................................ccccccc...........................................c........
    ..................cc..............................cc.................................................ccccccc..........................................cc........
    ..................cc..............................cc.................................................ccccccc..........................................cc........
    ..................cc..............................cc................................................cccccccc.........................................ccc........
    ..................cc..............................cc................................................cccccccc.........................................ccc........
    ..................cc..............................cc................................................cccccccc........................................cccc........
    ..................cc.............................c.c................................................cccccccc........................................cccc........
    ..................c..............................c.c................................................cccccccc........................................cccc........
    ..................c..............................c.c...............................................ccccccccc.......................................ccccc........
    ..................c..............................cc................................................ccccccccc.......................................ccccc........
    ..................c..............................cc................................................ccccccccc.......................................ccccc........
    ..................c..............................cc................................................ccccccccc.......................................ccccc........
    ..................c.............................ccc...............................................cccccccccc......................................cccccc........
    ..................c.............................ccc...............................................ccccccccccc.....................................cccccc........
    ..................c.............................ccc...............................................ccccccccccc.....................................cccccc........
    .................cc.............................ccc...............................................ccccccccccc....................................ccccccc........
    .................cc............................cccc..............................................cccccccccccc....................................ccccccc........
    .................cc............................cccc..............................................cccccccccccc...................................cccccccc........
    .................cc............................cccc..............................................ccccccccccccc..................................ccccccc.........
    ................ccc...........................ccccc..............................................ccccccccccccc.................................cccccccc.........
    ................ccc...........................ccccc..............................................ccccccccccccc.................................cccccccc.........
    ................ccc...........................ccccc..............................................ccccccccccccc.................................cccccccc.........
    ...............cccc...........................cccccc.............................................cccccccccccccc...............................ccccccccc.........
    ...............cccc..........................ccccccc.............................................ccccccccccccccc..............................ccccccccc.........
    ...............cccc..........................ccccccc............................................cccccccccccccccc.............................cccccccccc.........
    ...............cccc.........................ccccccccc...........................................ccccccccccccccccc............................cccccccccc.........
    ..............ccccc.........................ccccccccc........................22222..............cccccccccccccccccc..........................ccccccccccc.........
    ..............ccccc........................cccccccccc.....................222222222.............ccccccccccccccccccc.........................ccccccccccc.........
    ..............cccccc.......................cccccccccc...................222222222222............cccccccccccccccccccc.......................cccccccccccc.........
    .............ccccccc.......................ccccccccccc.................22222222222222...........ccccccccccccccccccccc.....................ccccccccccccc.........
    .............ccccccc......................cccccccccccc................222222222222222...........cccccccccccccccccccccc....................ccccccccccccc.........
    .............cccccccc.....................ccccccccccccc..............2222222222222222..........cccccccccccccccccccccccc..................ccccccccccccccc........
    .............cccccccc....................ccccccccccccccc............222222222222222222.........ccccccccccccccccccccccccc................cccccccccccccccc........
    ............cccccccccc...................ccccccccccccccc.............22222222222222222........ccccccccccccccccccccccccccccc............ccccccccccccccccc........
    ............cccccccccc..................ccccccccccccccccc............22222222222222222........cccccccccccccccccccccccccccccc...........ccccccccccccccccc........
    ...........ccccccccccc..................ccccccccccccccccc...........22222222222222222.........cccccccccccccccccccccccccccccc..........cccccccccccccccccc........
    ...........cccccccccccc................ccccccccccccccccccc..........2222222222222222.........cccccccccccccccccccccccccccccccc........cccccccccccccccccccc.......
    ..........ccccccccccccc...............ccccccccccccccccccccc.........2222222222222222.........cccccccccccccccccccccccccccccccc........cccccccccccccccccccc.......
    ..........ccccccccccccc...............cccccccccccccccccccccc........2222222222222222........cccccccccccccccccccccccccccccccccc.......ccccccccccccccccccccc......
    ..........cccccccccccccc.............cccccccccccccccccccccccc.......2222222222222222........ccccccccccccccccccccccccccccccccccc.....cccccccccccccccccccccc......
    .........ccccccccccccccc.............cccccccccccccccccccccccc......22222222222222222.......cccccccccccccccccccccccccccccccccccc.....ccccccccccccccccccccccc.....
    .........ccccccccccccccc............ccccccccccccccccccccccccccc....2222222222222222........ccccccccccccccccccccccccccccccccccccc...cccccccccccccccccccccccc.....
    ........cccccccccccccccc...........cccccccccccccccccccccccccccccc..2222222222222222.......ccccccccccccccccccccccccccccccccccccccc.cccccccccccccccccccccccccc....
    ........ccccccccccccccccc.........cccccccccccccccccccccccccccccccc.2222222222222222.......ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...
    .......cccccccccccccccccc........ccccccccccccccccccccccccccccccccccc222222222222222.......cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ......cccccccccccccccccccc......ccccccccccccccccccccccccccccccccccc222222222222222......cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ......ccccccccccccccccccccc....cccccccccccccccccccccccccccccccccccc222222222222222.....ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    .....cccccccccccccccccccccc...ccccccccccccccccccccccccccccccccccccc222222222222222...ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ....ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ....ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ...cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ..ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    .cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
tiles.setCurrentTilemap(tilemap`level0`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . e e e . . . . . . . . . . . 
    . . e 1 e e e f f f . . . . . . 
    . . e e 1 1 e f 5 f f . . . . . 
    . . . e e 1 1 f f f . . . . . . 
    . . . . e e f f f . . . . . . . 
    . . . . . e f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 370
orb = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(orb, sprites.castle.tileDarkGrass2)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . 5 f . . f f 5 . . . . . 
        . . . . 5 f . . . f 5 . . . . . 
        . . . . 5 f f . . f 5 . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . 5 f . . f f 5 . . . . . 
        . . . . 5 f . . . f 5 . . . . . 
        . . . . 5 f f . . f 5 . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . 5 f . . f f 5 . . . . . 
        . . . . 5 f . . . f 5 . . . . . 
        . . . . 5 f f . . f 5 . . . . . 
        . . . . 5 . . . . . 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 . . . 5 . . . . . . 
        . . . . . 5 . . f 5 . . . . . . 
        . . . . . 5 . . . 5 . . . . . . 
        . . . . . 5 f . . 5 . . . . . . 
        . . . . . 5 . . . 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 . . . 5 . . . . . . 
        . . . . . 5 . . f 5 . . . . . . 
        . . . . . 5 . . . 5 . . . . . . 
        . . . . . 5 f . . 5 . . . . . . 
        . . . . . 5 . . . 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    mySprite2 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......9............
        ......999...9.......
        ......919..919..9...
        ...9...9...999.999..
        ..919..7....9..919..
        ..999..77...7...9...
        ...9..77....7...77..
        ...7...7.7.777..7...
        .7...7.........7..7.
        ....................
        `, SpriteKind.flower)
    tiles.placeOnTile(mySprite2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . e e e . . . . . . . . . . . 
        . . e 1 e e e f f f . . . . . . 
        . . e e 1 1 e f 5 f f . . . . . 
        . . . e e 1 1 f f f . . . . . . 
        . . . . e e f f f . . . . . . . 
        . . . . . e f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (mySprite.vx > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . e e e e e e . . . . . . . 
            . . . e e e 1 1 e e . . . . . . 
            . . . . . e e e 1 e . . . . . . 
            . . . . e 1 1 1 e f f f . . . . 
            . . . . e e e e e f f 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f . f . . . . . . . . 
            `)
    }
    if (mySprite.vy > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . e e e . . . . . . . . . . . 
            . . e 1 e e e f f f . . . . . . 
            . . e e 1 1 e f 5 f f . . . . . 
            . . . e e 1 1 f f f . . . . . . 
            . . . . e e f f f . . . . . . . 
            . . . . . e f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
    if (mySprite.isHittingTile(CollisionDirection.Left) || mySprite.isHittingTile(CollisionDirection.Right)) {
        mySprite.vy = 0
        mySprite.ay = 0
    } else {
        mySprite.ay = 370
    }
})

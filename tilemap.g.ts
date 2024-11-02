// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level0":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000006000000000000000000000000000400010000000000000101010000000001000000000700000100000000000000000000000101010700000000000007000000000000000000000000000700000101010100000000000001010001060000000000000600000000010000060606000000000100010100000000000001000000000000000000000600000000000000000000070100000001000000000000000000000100000000010000000002070001010100000000000107000500010100000000000000000001010000010000000000000000000000010000000003030303030303030303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . 2 2 2 . 
. . . 2 . . . . . . . 2 . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 . . . . . . 2 2 . 2 
. . . . . . . . . . . . 2 . . . 
. . . . . . 2 . 2 2 . . . . . . 
2 . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . 2 . . . . 
. . . . . . 2 . . . . 2 . . . . 
. . . 2 2 2 . . . . . 2 . . . . 
2 2 . . . . . . . . . 2 2 . . 2 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.builtin.forestTiles0,myTiles.tile2,sprites.swamp.swampTile13,sprites.castle.tileDarkGrass2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

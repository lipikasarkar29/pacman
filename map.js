class MAP{
    constructor(){
        textMap = [
            ['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'],
            ['0 I - - - - I - - - - - I 0 I - - - - - I - - - - I 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 I - - - - I - - I - - I - I - - I - - I - - - - I 0'],
            ['0 - 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 - 0'],
            ['0 I - - - - I 0 0 I - - I 0 I - - I 0 0 I - - - - I 0'],
            ['0 0 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 I - - I - I - - I 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 0 1 0 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 1 1 1 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['- - - - - - I - - I 0 0 1 1 1 0 0 I - - I - - - - - -'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 I - - - - - - - I 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['0 I - - - - I - - I - - I 0 I - - I - - I - - - - I 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 I - I 0 0 I - - I - - I - I - - I - - I 0 0 I - I 0'],
            ['0 0 0 - 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 - 0 0 0'],
            ['0 0 0 - 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 - 0 0 0'],
            ['0 I - I - - I 0 0 I - - I 0 I - - I 0 0 I - - I - I 0'],
            ['0 - 0 0 0 0 0 0 0 0 0 0 - 0 - 0 0 0 0 0 0 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 0 0 0 0 0 0 - 0 - 0 0 0 0 0 0 0 0 0 0 - 0'],
            ['0 I - - - - - - - - - - I - I - - - - - - - - - - I 0'],
            ['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'],
        ]
        textMap2 = [
            ['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'],
            ['0 I - - - - I - - - - - I 0 I - - - - - I - - - - I 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 I - - - - I - - I - - I X I - - I - - I - - - - I 0'],
            ['0 - 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 - 0'],
            ['0 I - - - - I 0 0 I - - I 0 I - - I 0 0 I - - - - I 0'],
            ['0 0 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 I - - I - I - - I 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 0 1 0 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 R 1 P 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['- - - - - - I - - I 0 0 B 1 O 0 0 I - - I - - - - - -'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 I - - - - - - - I 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 0 0 0 0'],
            ['0 I - - - - I - - I - - I 0 I - - I - - I - - - - I 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 - 0 0 0 0 0 - 0 - 0 0 0 0 0 - 0 0 0 0 - 0'],
            ['0 I - I 0 0 I - - I - - I - I - - I - - I 0 0 I - I 0'],
            ['0 0 0 - 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 - 0 0 0'],
            ['0 0 0 - 0 0 - 0 0 - 0 0 0 0 0 0 0 - 0 0 - 0 0 - 0 0 0'],
            ['0 I - I - - I 0 0 I - - I 0 I - - I 0 0 I - - I - I 0'],
            ['0 - 0 0 0 0 0 0 0 0 0 0 - 0 - 0 0 0 0 0 0 0 0 0 0 - 0'],
            ['0 - 0 0 0 0 0 0 0 0 0 0 - 0 - 0 0 0 0 0 0 0 0 0 0 - 0'],
            ['0 I - - - - - - - - - - I - I - - - - - - - - - - I 0'],
            ['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'],
        ]

        this.world = [];
        this.referenceWorld = [];

        for(var i = 0; i < textMap2.length; i++) {
            for(var j = 0; j < textMap2[j].length; j++) {
                this.world.push(textMap2[i][j].split(" "));
            }
        }
        for(var i = 0; i < textMap2.length; i++) {
            for(var j = 0; j < textMap2[j].length; j++) {
                this.referenceWorld.push(textMap2[i][j].split(" "));
            }
        }
    }

    // display() {
    //     for(var y = 0; y < this.world.length; y++) {
    //         for(var x = 0; x < this.world[y].length; x++) {
    //             switch(this.world[y][x]) {
    //                 case '0':
    //                     fill(22, 22, 250);
    //                     strokeWeight(2);
    //                     stroke(0);
    //                     rect(x*cell, y*cell, cell, cell);
    //                     //
    //                     break;
    //                 case '1':
    //                     fill(0);
    //                     rect(x*cell, y*cell, cell, cell);
    //                     break;                
    //                 default:
    //             }
    //         }
    //     }
    // }

    create() {
        for(var y = 0; y < this.world.length; y++) {
            for(var x = 0; x < this.world[y].length; x++) {
                switch(this.world[y][x]) {
                    case '0':
                        blocks.push(block = createSprite(x * cell + 10, y * cell + 10, cell, cell));
                        block.shapeColor = rgb(0, 40, 200);
                        break;
                    case '-':
                        pointThings.push(points = createSprite(x * cell + 10, y * cell + 10, 5, 5));
                        // points.shapeColor = 'white';
                        break;
                    case 'I':
                        pointThings.push(points = createSprite(x * cell + 10, y * cell + 10, 5, 5));
                        // points.shapeColor = 'white';
                        break;
                    case 'R':
                        redGhost = createSprite(x * cell + 10, y * cell + 10, 20, 20);
                        // redGhost.shapeColor = 'red';
                        // redGhost.setCollider('rectangle', 1, 1);
                        // redGhost.debug = true;
                        redGhost.addAnimation('red ghost', ghostRed);
                        redGhost.scale = 0.075;
                        break;
                    case 'B':
                        blueGhost = createSprite(x * cell + 10, y * cell + 10, 1, 1);
                        blueGhost.addAnimation('blue ghost', ghostBlue);
                        blueGhost.scale = 0.075;
                        break;
                    case 'O':
                        orangeGhost = createSprite(x * cell + 10, y * cell + 10, 1, 1);
                        orangeGhost.addAnimation('orange ghost', ghostOrange);
                        orangeGhost.scale = 0.075;
                        break;
                    case 'P':
                        pinkGhost = createSprite(x * cell + 10, y * cell + 10, 1, 1);
                        pinkGhost.addAnimation('pink ghost', ghostPink);
                        pinkGhost.scale = 0.075;
                        break;
                    default:
                }
            }
        }
    }

    mapUpdate(){
        for(var i= 0; i < this.world.length; i++) {
            for(var j = 0; j < this.world[i].length; j++) {
                if (this.world[i][j] == 'R' && frameCount % 4 == 0){
                    this.world[i][j] = '-';
                    // console.log('works: ' + this.world[i][j]);
                    // console.log(j + ", " + i);
                    this.world[Math.round(redGhost.position.y/20 - 0.05)][Math.round(redGhost.position.x/20 - 0.05)] = 'R';
                }
                if (this.world[i][j] == 'B' && frameCount % 4 == 0){
                    this.world[i][j] = '-';
                    // console.log('works: ' + this.world[i][j]);
                    // console.log(j + ", " + i);
                    this.world[Math.round(blueGhost.position.y/20 - 0.05)][Math.round(blueGhost.position.x/20 - 0.05)] = 'B';
                }
                if (this.world[i][j] == 'O' && frameCount % 4 == 0){
                    this.world[i][j] = '-';
                    // console.log('works: ' + this.world[i][j]);
                    // console.log(j + ", " + i);
                    this.world[Math.round(orangeGhost.position.y/20 - 0.05)][Math.round(orangeGhost.position.x/20 - 0.05)] = 'O';
                }
                if (this.world[i][j] == 'P' && frameCount % 4 == 0){
                    this.world[i][j] = '-';
                    // console.log('works: ' + this.world[i][j]);
                    // console.log(j + ", " + i);
                    this.world[Math.round(pinkGhost.position.y/20 - 0.05)][Math.round(pinkGhost.position.x/20 - 0.05)] = 'P';
                }
            }
        }
    }
}
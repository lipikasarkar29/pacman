# PacMan!

I have created my own Pacman game! I used a [useful video](https://www.youtube.com/watch?v=ataGotQ7ir8) to make the ghost movement AI. This took a long time to make and it is not the best but I am happy with what I have made. I will be making a second version with touch support so that it is playable on mobile.

### Here is the link to play the game!
[The game is playable at this link!](https://reeledwarrior14.github.io/PacMan/)

## How to play!
Playing Pacman is easy to learn and hard to master, like all classic games. Simply score as many points as you can eating the small dots all around the maze. 1 point per dot and there are 290 of them. To win you simply have to collect all the dots and avoid the ghosts. Letting the ghosts touch you results in losing. While most Pacman games have 3 lives my version of the game only has one life. Since you only get 1 life I have done a few things to make the game a little easier:
1. I made Pacman faster than the ghosts so you can outrun them in a straight line
2. I made a small delay at every intersection so that you can turn faster. This delay is very small but it gives the player a tiny advantage
3. The ghosts can not turn 180 degrees and they can only turn at intersections
4. The ghosts have different targets. Knowing how the ghosts move can give you an advantage and help you escape the ghosts.

## The ghosts movement!
I made the movement for the ghosts using [this helpful video](https://www.youtube.com/watch?v=ataGotQ7ir8) and [this helpful article](https://gameinternals.com/understanding-pac-man-ghost-behavior). To sumarize each ghost has its own target. It will take all four directions around it and decide which direction to go in to reduce the distance from it to the target. The ghosts can not turn around 180 degrees and the ghosts can not go through walls. The red ghost's (Blinky) target is Pacman. This is the ghost you will have to look our for and escape from. The orange ghost's (Clyde) target is 5 units/blocks under and to the right of Pacman. This allows Clyde to predict where Pacman is going and cut him off. The blue ghost's (Inky) target is the opposite of the distance from Blinky to Pacman. This also allows Inky to be in front of Pacman and cut him off with Blinky. The pink ghost (Pinky) has a random target and moves randomly through the map. Every 500 frames and at the start of the game the ghosts will enter scatter mode. Scatter mode will make the ghosts go to their corners and leave pacman alone for a while. The ghosts start every game in scatter mode although normally they are in chase mode.

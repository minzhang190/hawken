---
layout: default

permalink: /lianliankan
---

# The game Liánliánkàn

The game plays on a grid of infinite size where certain cells are initially having tiles placed on them. The goal of this game is to remove all tiles.

A tile gets removed when its being linked to another tile at which time both linked tiles are removed. Two tiles can be linked when the tiles have matching patterns, and a path exists originating from the cell containing one tile, optionally going through a series of cells not containing any tile if the originating cell and terminating cell are not neighboring, and terminating in the cell containing the other tile, where the path does not include more than two bends, defined as any three continous cells on the path which are not in a straight line.

To link a tile to another linkable one and remove them, click on the first tile then the second. In the case that no linkable tile pairs exist, the tiles on the grid are shuffled automatically, otherwise, there's guarantee that at least one pair exists. If you can't find any, you can either request a hint where you'll be shown one of the pairs, or request a complete shuffle.

In the first and second level, matching patterns are defined to be the same picture. In the last level, matching patterns consist of a picture and its corresponding Chinese word in pinyin; two same pictures don't qualify as matching patterns, nor do two same words; everything else works in the same way.

## Examples of linkable tiles

![Neighboring]({{ '/assets/lianliankan/1.png' | relative_url }})
Two neighboring tiles containing matching patterns (same picture in the first and second level) can be linked.

![Path]({{ '/assets/lianliankan/2.png' | relative_url }})
Two tiles can be linked over a path. The path can go in both horizontal and vertical ways.

![Path + 1 bend]({{ '/assets/lianliankan/3.png' | relative_url }})
A path can contain a bend.

![Path + 2 bend]({{ '/assets/lianliankan/4.png' | relative_url }})
A path can also contain two bends but two is the maximum allowed number of bends.

![Path on tiles]({{ '/assets/lianliankan/5.png' | relative_url }})
A path cannot run on other tiles which are not removed yet.

![Diagonal path]({{ '/assets/lianliankan/6.png' | relative_url }})
Tiles cannot be linked in the diagonal direction, nor can paths go in this way.

![Path + 3 bend]({{ '/assets/lianliankan/7.png' | relative_url }})
A path cannot contain more than two bends.

![Pinyin match]({{ '/assets/lianliankan/8.png' | relative_url }})
In the third level, a picture and a corresponding pinyin make a matching pattern which can be linked in the same way.

![Pinyin mismatch]({{ '/assets/lianliankan/9.png' | relative_url }})
In the third level, identical tiles (either pinyin or picture) are not matching patterns and cannot be linked.

## Gameplay recording of Zhang LaoShi

Here is an example gameplay.

{% include youtube.html id="pBjtbd3_p1c" width="100%" height="62.37%" %}

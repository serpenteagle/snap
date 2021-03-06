<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Snap][1]
    -   [Parameters][2]
    -   [add][3]
        -   [Parameters][4]
    -   [remove][5]
        -   [Parameters][6]
    -   [move][7]
        -   [Parameters][8]
    -   [getBlocks][9]
    -   [propose][10]
        -   [Parameters][11]

## Snap

The main Snap class.

### Parameters

-   `config` **[Object][12]** The configuration object. (optional, default `{}`)
-   `blocks` **[Array][13]** The blocks to add to the instance. (optional, default `[]`)

### add

Adds a new block to the instance.

#### Parameters

-   `block` **[Object][12]** The block you want to add.

### remove

Removes a block from the instance.

#### Parameters

-   `blockId` **[String][14]** the id of the block you want to remove.

### move

Moves an existing block and updates its position value.

#### Parameters

-   `blockId` **[String][14]** The id of the block.
-   `newPosition` **[Array][13]** The new position of the block.

### getBlocks

Returns the blocks defined on the instance.

### propose

Proposes a new position for a block and returns the first target match in both the x and y direction.

#### Parameters

-   `blockId` **[String][14]** The id of the block you want to propose a position change to.
-   `newPosition` **[Array][13]** The new position you want to propose.

Returns **[Array][13]** An array containing the first target match in both the x and y directions.

[1]: #snap

[2]: #parameters

[3]: #add

[4]: #parameters-1

[5]: #remove

[6]: #parameters-2

[7]: #move

[8]: #parameters-3

[9]: #getblocks

[10]: #propose

[11]: #parameters-4

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[13]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

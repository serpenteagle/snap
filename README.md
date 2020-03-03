# Snap

Snap is a library designed to help compute 2d rectangular object snapping. You create an instance and add objects with dimension and position values. Then you can "propose" a new position on a particular object, and the method will return a 2-value array with either the snap value or null if none was found.

## Usage

1. Instantiate a snap instance

   ```
   const config = {
     tolerance: 10
   }
   const blocks = [
     {id: "apple", size: [100, 100], position: [50, 300]},
     ...
    ];

   const snap = new Snap(config, blocks);
   ```

1. Add any remaining blocks to the instance
   ```
   snap.add({...});
   snap.add({...});
   ```
1. Propose a new position for an object to the instance
   ```
   snap.propose("blockId", [100, 250]);
   // returns [200, null]
   ```

### Other Methods

- Revove an object
  ```
  snap.remove("objectId");
  ```
-

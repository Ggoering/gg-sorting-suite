# Sorting-suite  

## Objectives
 * The goal of this project is to write 4 sorting algorithms and test them.  The algorithms are: bubble sort, insertion sort, merge sort, and quick sort.  The algorithms can be loosely compared using mocha testing. The test times out after 2 seconds, and displays the length of time to return the sorted array. This allows us to find the upper limits of array size and speed of sorting for the array being sorted.

 ## Algorithms

 ### Bubble Sort
  * Using two nested for loops, this algorithm will start by grabbing an item at the beginning of the array and sequentially compare neighboring values. The item that was initially grabbed will keep swapping places with the item above it so long as it is larger.  If the item above the one being grabbed is larger, that will be grabbed instead, and the neighboring comparisons will continue, until the for loops reach their end condition.

  ### Insertion sort
   * Insertion sort will start with a "sorted" portion of the array being 1 element in length at the beginning of the array.  An item called the pointer will move right of the sorted portion, and pull that element back to the sorted portion, and compare until it finds its relative place.  After this, the sorted portion of the array grows in length by 1.  The algorithm is complete once the sorted portion is equal to the array length.

   ### Merge sort
    * Merge sort is a more advanced algorithm that has huge improvement over insertion sort and bubble sort.  It works by breaking down the array down the middle over and over again until there are sub arrays each of length 1.  Arrays of length 1 are considered to be sorted.  The left hand sorted array and the right hand sorted array are then compared by taking the first element in each array, removing, and pushing them to a third array that is now sorted.  Both the breakdown and the merge are applied recursively.

    ### Quick sort
     * quick sort works by taking an array and choosing a pivot that will be a dividing point in the array.  All values less tha  the pivot will go to the left of the array, and all values greater than will go to the right.  This pivot is in its final location of the sorted array.  This partitioning is then applied recursively until each element has been declared a pivot.

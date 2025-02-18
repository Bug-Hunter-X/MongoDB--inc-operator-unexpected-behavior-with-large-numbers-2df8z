# MongoDB $inc Operator Unexpected Behavior with Large Numbers

This repository demonstrates a common error when using the `$inc` operator in MongoDB with very large numbers. The `$inc` operator is designed to increment a numeric field in a document by a specified value. However, if you use it with numbers larger than the maximum safe integer, it can lead to unexpected results.

## Bug
The issue occurs when attempting to increment a numeric field with a large number that exceeds JavaScript's safe integer limit. This results in the `$inc` operation failing to increment the field correctly, leading to data inconsistencies or errors.

## Solution
To resolve this issue, ensure your values remain within the maximum safe integer limit. If you need to store and manipulate very large numbers, you should consider storing them as strings and perform the arithmetic operations appropriately.
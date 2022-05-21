# Create 100 random numbers in range 0 to 1000.
# Sort the random numbers from least to greatest
# Find the distance between each of the adjacent numbers
# What is the most common distance?

# Example: 
# Random Numbers: 1, 4, 11, 12, 13, 16, 30, 31 ...
# Disatnce:        3,  7,  1,  1,  3, 14,  14
# Most common distance: 1
#########################################################
import random


def mostCommonDistance(randomRange, lengthOfList):
  """
  params:
    randomRange: int => The range of values in (1, randomRange) including 
                        endpoints  that can be randomly selected 
                        for each element in the list
    lengthOfList: int => Total length of the list of random numbers 
                         of range 
  returns: Int => The most common distance between the difference of 
                  each adjacent elements in the list of random numbers
  """
  randomNumbers = [ random.randint(1, randomRange) for i in range(lengthOfList)]
  randomNumbers.sort()
  distances = [val - randomNumbers[index - 1] for index, val in enumerate(randomNumbers)][1:]
  return max(set(distances), key=distances.count)
  

if __name__ == "__main__":
  Result = mostCommonDistance(1000, 100)
  print(Result)
  

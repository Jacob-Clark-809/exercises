def halvsies(to_half)
  first_half = []
  second_half = []
  midway = to_half.length.even? ? to_half.length / 2 - 1 : to_half.length / 2
  counter = 0
  while counter < to_half.length
    if counter <= midway
      first_half << to_half[counter]
    else
      second_half << to_half[counter]
    end
    counter += 1
  end
  [first_half, second_half]
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]


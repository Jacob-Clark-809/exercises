def diamond(n)
  # top half
  count = 1
  until count > n
    puts ('*' * count).center(n)
    count += 2
  end

  # bottom half
  count = n - 2
  until count < 1
    puts ('*' * count).center(n)
    count -= 2
  end
end

def print_row(grid_size, distance_from_center)
  number_of_stars = grid_size - 2 * distance_from_center
  if number_of_stars > 1
    outline = '*' + (' ' * (number_of_stars - 2)) + '*'
  else
    outline = '*'
  end
  puts outline.center(grid_size)
end

def diamond_outline(grid_size)
  max_distance = (grid_size - 1) / 2
  max_distance.downto(0) { |distance| print_row(grid_size, distance) }
  1.upto(max_distance)   { |distance| print_row(grid_size, distance) }
end

diamond_outline(1)
diamond_outline(3)
diamond_outline(9)
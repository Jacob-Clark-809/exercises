def star(num)
  lower_rows = lower(num)
  middle_rows = middle(num)
  upper_rows = lower_rows.reverse
  star = upper_rows + middle_rows + lower_rows

  star.each { |row| puts row }
end

def middle(num)
  ['***'.center(num), '*' * num, '***'.center(num)]
end

def lower(num)
  rows = []
  curr_row = '* * *'
  count = 2
  until curr_row.length == num
    rows << curr_row.center(num)
    curr_row = '*' + (' ' * count) + '*' + (' ' * count) + '*'
    count += 1
  end
  rows << curr_row
  rows
end

star(7)
star(9)
star(15)
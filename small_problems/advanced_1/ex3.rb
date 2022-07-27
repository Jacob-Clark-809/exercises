require 'pry'

def transpose(matr)
  dim = matr.length
  trans = Array.new(dim) { [] }
  dim.times do |row|
    dim.times do |col|
      trans[row] << matr[col][row]
    end
  end
  trans
end

matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

new_matrix = transpose(matrix)

p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
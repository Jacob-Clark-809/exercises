def swap(sentence)
  sentence.split.each do |word|
    unless word.length == 1
      first = word[0]
      last = word[-1]
      word[0] = last
      word[-1] = first
    end
  end.join(" ")
end

p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
p swap('Abcde') == 'ebcdA'
p swap('a') == 'a'
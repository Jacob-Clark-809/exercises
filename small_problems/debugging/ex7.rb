def neutralize(sentence)
  words = sentence.split(' ')
  words.each do |word|
    words.delete(word) if negative?(word)
  end

  words.join(' ')
end

def negative?(word)
  [ 'dull',
    'boring',
    'annoying',
    'chaotic'
  ].include?(word)
end

puts neutralize('These dull boring cards are part of a chaotic board game.')
# Expected: These cards are part of a board game.
# Actual: These boring cards are part of a board game.

# On line 3 we call the each method on the array of words words.
# Unfortunately this program fails to do as expected because in the each
# block we mutate the caller (words) with the delete method. Each time this
# is invoked it shortens the words array and so when we try to access the
# next element on the next iteration we actually pass the element one after
# what we would expect (because the array is one element shorter than
# previously). Hence, we skip some words in the array.
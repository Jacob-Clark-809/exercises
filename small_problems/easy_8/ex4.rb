def leading_substrings(word)
  result = []
  count = 1
  while count <= word.length
    result << word[0, count]
    count += 1
  end
  result
end

def substrings(word)
  result = []
  count = 0
  while count < word.length
    result += leading_substrings(word[count..-1])
    count += 1
  end
  result
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]

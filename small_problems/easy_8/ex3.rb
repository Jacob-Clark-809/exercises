def leading_substrings(word)
  result = []
  count = 1
  while count <= word.length
    result << word[0, count]
    count += 1
  end
  result
end

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
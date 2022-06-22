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

def palindromes(sentence)
  substrings(sentence).select { |substring| substring == substring.reverse && substring.length != 1}
end

p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]
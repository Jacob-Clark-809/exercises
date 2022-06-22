def staggered_case(sentence)
  count = 0
  result = ''
  while count < sentence.length
    char = count.even? ? sentence[count].upcase : sentence[count].downcase
    result << char
    count += 1
  end
  result
end

p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
p staggered_case('ALL_CAPS') == 'AlL_CaPs'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'
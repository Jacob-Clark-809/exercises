def uppercase?(sentence)
  result = true
  alpha_only = sentence.delete("^A-Za-z")
  count = 0
  while result && count < alpha_only.length
    result = false if ('a'..'z').include?(alpha_only[count])
    count += 1
  end
  result
end

p uppercase?('t') == false
p uppercase?('T') == true
p uppercase?('Four Score') == false
p uppercase?('FOUR SCORE') == true
p uppercase?('4SCORE!') == true
p uppercase?('') == true
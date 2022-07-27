def balanced?(str)
  balanced = true
  brackets_open = 0
  str.each_char do |char|
    brackets_open += 1 if char == '('
    brackets_open -= 1 if char == ')'
    balanced = false if brackets_open < 0
  end
  balanced = false if brackets_open != 0
  balanced
end

p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false
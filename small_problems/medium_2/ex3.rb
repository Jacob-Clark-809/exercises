LOWER_CASE = ('a'..'z')
UPPER_CASE = ('A'..'Z')

def letter_percentages(str)
  lower_count = 0
  upper_count = 0
  neither_count = 0
  str.each_char do |char|
    if LOWER_CASE.include?(char) then lower_count += 1
    elsif UPPER_CASE.include?(char) then upper_count += 1
    else neither_count += 1
    end
  end
  lower_percent = (lower_count.to_f / str.length) * 100
  upper_percent = (upper_count.to_f / str.length) * 100
  neither_percent = (neither_count.to_f / str.length) * 100
  { lowercase: lower_percent, uppercase: upper_percent, neither: neither_percent }
end

p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }
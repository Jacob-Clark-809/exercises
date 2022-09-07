def rot13(str)
  result = ''
  str.each_char do |char|
    ascii = char.ord
    if letter?(char)
      ascii += 13
      if char.upcase == char
        ascii -= 26 if ascii > 90
      else
        ascii -= 26  if ascii > 122
      end
    end
    result << ascii.chr
  end
  puts result
end

def letter?(char)
  ('a'..'z').include?(char) || ('A'..'Z').include?(char)
end

file = File.open('ex5.txt')
file_data = file.readlines.map(&:chomp)

file_data.each { |name| puts rot13(name) }
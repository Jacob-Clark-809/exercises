ACCEPTED = ('a'..'z').to_a

def cleanup(sentence)
  result = ''
  sentence.each_char do |char|
    if ACCEPTED.include?(char)
      result << char
    else
      result << ' ' unless result[-1] == ' '
    end
  end
  result
end

p cleanup("---what's my +*& line?") == ' what s my line '

BLOCKS = %w(B X D C N G R F J H V L Z).zip(%w(O K Q P A T E S W U I Y M))

def block_word?(word)
  chars = word.upcase.chars
  block_word = true
  chars.each do |char|
    BLOCKS.each do |block|
      if block.include?(char)
        mirror_letter = (block - [char])[0]
        block_word = false if chars.include?(mirror_letter)
        block_word - false if chars.count(char) > 1
      end
    end
  end
  block_word
end

p block_word?('BATCH') == true
p block_word?('BUTCH') == false
p block_word?('jest') == true
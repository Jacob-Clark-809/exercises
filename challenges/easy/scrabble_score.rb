class Scrabble
  SCORES = Hash.new(0)
  %w(a e i o u l n r s t).each { |letter| SCORES[letter] = 1 }
  %w(d g).each { |letter| SCORES[letter] = 2 }
  %w(b c m p).each { |letter| SCORES[letter] = 3 }
  %w(f h v w y).each { |letter| SCORES[letter] = 4 }
  SCORES['k'] = 5
  %w(j x).each { |letter| SCORES[letter] = 8 }
  %w(q z).each { |letter| SCORES[letter] = 10 }


  def initialize(word)
    @word = word.nil? ? '' : word.downcase
  end

  def score
    @word.chars.map { |char| SCORES[char] }.sum
  end

  def self.score(word)
    Scrabble.new(word).score
  end
end
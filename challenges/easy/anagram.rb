class Anagram
  def initialize(anagram)
    @anagram = anagram.downcase
  end

  def match(attempts)
    result = []
    attempts.each do |attempt|
      result << attempt if anagram?(attempt.downcase)
    end
    result
  end

  private

  def anagram?(attempt)
    @anagram.chars.sort == attempt.chars.sort && !(attempt == @anagram)
  end
end
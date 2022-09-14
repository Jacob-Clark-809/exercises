class Octal
  def initialize(octal)
    @octal = octal
  end

  def to_decimal
    return 0 unless valid?
    power = -1
    @octal.chars.reverse.reduce(0) do |memo, digit|
      power += 1
      memo += digit.to_i * (8**power)
    end
  end

  private

  def valid?
    @octal.chars.all? { |char| %w(0 1 2 3 4 5 6 7).include?(char) }
  end
end
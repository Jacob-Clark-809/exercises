class Diamond
  def self.make_diamond(end_letter)
    return "A\n" if end_letter == 'A'
    width = (end_letter.ord - 'A'.ord) * 2 + 1
    result = ''
    result << top_half_arr(width).join
    result << top_half_arr(width)[0...-1].reverse.join
    result
  end

  class << self
    private

    def top_half_arr(width)
      result = []
      result << 'A'.center(width) + "\n"
      spacing = 1
      current_letter = 'B'
      until spacing == width
        result << (row(current_letter, spacing, width) + "\n")
        current_letter = (current_letter.ord + 1).chr
        spacing += 2
      end
      result
    end

    def row(letter, spacing, width)
      (letter + (" " * spacing) + letter).center(width)
    end
  end
end
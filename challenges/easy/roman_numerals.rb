class RomanNumeral
  CONVERSIONS = { M: 1000, CM: 900, D: 500, CD: 400, C:100, XC: 90, L:50, XL:40,
                 X:10, IX:9, V:5, IV: 4, I: 1 }

  def initialize(val)
    @value = val
  end

  def to_roman
    remaining = @value
    result = ''
    CONVERSIONS.each do |numeral, value|
      until value > remaining
        result << numeral.to_s
        remaining -= value
      end
    end
    result
  end
end
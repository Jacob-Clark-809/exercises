class SumOfMultiples
  def initialize(*set)
    @set = set
  end

  def to(max)
    multiples = []
    @set.each do |val|
      count = 1
      until val * count >= max
        multiples << val * count unless multiples.include?(val * count)
        count += 1
      end
    end
    multiples.sum
  end

  def self.to(max)
    SumOfMultiples.new(3, 5).to(max)
  end
end
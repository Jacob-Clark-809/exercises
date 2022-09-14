class DNA
  def initialize(strand)
    @strand = strand
  end

  def hamming_distance(other_strand)
    count = 0
    strands = [@strand, other_strand].sort_by(&:length)
    strands[0].each_char.with_index do |char, ind|
      count += 1 if char != strands[1][ind]
    end
    count
  end
end
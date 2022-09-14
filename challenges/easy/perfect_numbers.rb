class PerfectNumber
  def self.classify(num)
    raise StandardError if num <= 0
    PerfectNumber.new(num).classify
  end

  def initialize(num)
    @num = num
  end

  def classify
    determine_class
  end

  private

  def determine_class
    case aliquot_sum
    when (0...@num) then 'deficient'
    when @num then 'perfect'
    else 'abundant'
    end
  end

  def aliquot_sum
    attempt = 1
    divisors = []
    until attempt > @num / 2
      divisors << attempt if @num % attempt == 0
      attempt += 1
    end
    divisors.sum
  end
end
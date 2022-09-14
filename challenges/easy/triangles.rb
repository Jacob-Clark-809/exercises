class Triangle
  def initialize(a, b, c)
    @a = a
    @b = b
    @c = c
    validate_triangle
  end

  def kind
    case
    when all_sides_equal? then 'equilateral'
    when two_sides_equal? then 'isosceles'
    else 'scalene'
    end
  end

  private

  def all_sides_equal?
    @a == @b && @b == @c
  end

  def two_sides_equal?
    @a == @b || @b == @c || @c == @a
  end

  def validate_triangle
    unless all_sides_greater_than_zero? && sides_proportional?
      raise(ArgumentError)
    end
  end

  def all_sides_greater_than_zero?
    @a > 0 && @b > 0 && @c > 0
  end

  def sides_proportional?
    @a + @b > @c && @a + @c > @b && @b + @c > @a
  end
end
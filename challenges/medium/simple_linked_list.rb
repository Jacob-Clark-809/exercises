class Element
  attr_reader :datum, :next

  def initialize(datum, _next=nil)
    @datum = datum
    @next = _next
  end
end
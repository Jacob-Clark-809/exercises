class Clock
  def initialize(hours, minutes=0)
    @hours = hours
    @minutes = minutes
  end

  def self.at(hours, minutes=0)
    self.new(hours, minutes)
  end

  def +(mins)
    @minutes += mins
    while @minutes > 60
      @minutes -= 60
      @hours += 1
    end
    adjust
    self
  end

  def -(mins)
    @minutes -= mins
    while @minutes < 0
      @minutes += 60
      @hours -= 1
    end
    adjust
    self
  end

  def ==(other_clock)
    @hours == other_clock.hours && @minutes == other_clock.minutes
  end

  def to_s
    format("%.2i", @hours) + ":" + format("%.2i", @minutes)
  end

  protected

  attr_reader :hours, :minutes

  private

  def adjust
    while @hours < 0
      @hours += 24
    end
    while @hours > 23
      @hours -= 24
    end
  end
end
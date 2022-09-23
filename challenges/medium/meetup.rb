class Meetup
  WEEKDAY_CONVERTER = { 'sunday' => 0, 'monday' => 1, 'tuesday' => 2,
                        'wednesday' => 3, 'thursday' => 4, 'friday' => 5,
                        'saturday' => 6 }

  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(weekday, schedule)
    case schedule.downcase
    when 'first' then which_date(WEEKDAY_CONVERTER[weekday.downcase], 1)
    when 'second' then which_date(WEEKDAY_CONVERTER[weekday.downcase], 2)
    when 'third' then which_date(WEEKDAY_CONVERTER[weekday.downcase], 3)
    when 'fourth' then which_date(WEEKDAY_CONVERTER[weekday.downcase], 4)
    when 'fifth' then which_date(WEEKDAY_CONVERTER[weekday.downcase], 5)
    when 'last' then last(WEEKDAY_CONVERTER[weekday.downcase])
    when 'teenth' then teenth(WEEKDAY_CONVERTER[weekday.downcase])
    else raise(ArgumentError)
    end
  end

  private

  def which_date(weekday, occurence)
    current_date = Date.civil(@year, @month, 1)
    count = 0
    until count == occurence || current_date.month != @month
      count += 1 if current_date.wday == weekday
      current_date += 1
    end

    if count == occurence
      current_date - 1
    end
  end

  def last(weekday)
    current_date = Date.civil(@year, @month, 1)
    until current_date.month != @month
      last = current_date if current_date.wday == weekday
      current_date += 1
    end

    last
  end

  def teenth(weekday)
    current_date = Date.civil(@year, @month, 13)
    until current_date.day > 19
      return current_date if current_date.wday == weekday
      current_date += 1
    end
  end
end
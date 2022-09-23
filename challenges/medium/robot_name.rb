class Robot
  attr_reader :name

  @@used_names = []

  def initialize
    @name = set_name
  end

  def set_name
    new_name = ''
    2.times { new_name << ('A'..'Z').to_a.sample }
    3.times { new_name << ('0'..'9').to_a.sample }
    if @@used_names.include?(new_name)
      set_name
    else
      @@used_names << new_name
      @name = new_name
    end
  end

  def reset
    @@used_names.delete(@name)
    set_name
  end
end
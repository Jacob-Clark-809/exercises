class Pet
  attr_reader :name

  def initialize(name)
    @name = name.to_s
  end

  def to_s
    @name.upcase!
    "My name is #{@name}."
  end
end

name = 'Fluffy'
fluffy = Pet.new(name)
puts fluffy.name
puts fluffy
puts fluffy.name
puts name

# Outputs:
# Fluffy
# My name is FLUFFY
# FLUFFY
# FLUFFY

# To fix change to_s method (line 8) to the single line:
# "My name  is #{@name.upcase}"

name = 42
fluffy = Pet.new(name)
name += 1
puts fluffy.name
puts fluffy
puts fluffy.name
puts name

# Output:
# 42
# My name is 42
# 43
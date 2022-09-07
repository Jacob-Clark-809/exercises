# Group 1
# my_proc = proc { |thing| puts "This is a #{thing}." }
# puts my_proc
# puts my_proc.class
# my_proc.call
# my_proc.call('cat')

# Defining a proc in this way instanstiates a Proc object. We can think of
# this as a block of code that can be passed around and executed at will.
#  We notice from the above code that we can call a proc with an
# incorrect number of arguments and the code will still run. Any block
# variables not passed in will have nil value.

# Group 2
my_lambda = lambda { |thing| puts "This is a #{thing}." }
my_second_lambda = -> (thing) { puts "This is a #{thing}." }
# puts my_lambda
# puts my_second_lambda
# puts my_lambda.class
# my_lambda.call('dog')
# my_lambda.call
# my_third_lambda = Lambda.new { |thing| puts "This is a #{thing}." }

# Lambda's appear to be a type of Proc. Unlike procs they cannot be  called
# with an incorrect number of arguments (this will return an error). They
# have special syntax for instanstiation: = -> (arg) { block }. Finally,
# from the error produced from line 22 we know that Lambda is not a class
# of its own.

# Group 3
def block_method_1(animal)
  yield
end

# block_method_1('seal') { |seal| puts "This is a #{seal}."}
# block_method_1('seal')

# Methods take blocks which like procs can recieve an incorrect number of
# arguments. Calling yield when no block has been provided causes a
# LocalJump error.

# Group 4
def block_method_2(animal)
  yield(animal)
end

block_method_2('turtle') { |turtle| puts "This is a #{turtle}."}
block_method_2('turtle') do |turtle, seal|
  puts "This is a #{turtle} and a #{seal}."
end
block_method_2('turtle') { puts "This is a #{animal}."}

# As before blocks can recieve an incorrect number of arguments and those
# not specified will return nil. Blocks do not have access to local variables
# within the methods they are passed to. These variables must be explicitly
# passed in to the block.


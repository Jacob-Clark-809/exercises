def multiply(num1, num2)
  num1 * num2
end

def square(num)
  multiply(num, num)
end

def power(num, ind)
  if ind == 1
    num
  elsif ind == 2
    multiply(num, num)
  elsif ind > 2
    num * power(num, ind - 1)
  end
end

p square(5) == 25
p square(-8) == 64

p power(3, 4)
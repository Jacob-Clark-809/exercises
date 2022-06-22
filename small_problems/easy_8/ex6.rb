def fizzbuzz(start, finish)
  result = []
  while start <= finish
    if start % 3 == 0 && start % 5 == 0
      result << "FizzBuzz"
    elsif start % 3 == 0
      result << "Fizz"
    elsif start % 5 == 0
      result << "Buzz"
    else
      result << start.to_s
    end
    start += 1
  end
  puts result.join(", ")
end

fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
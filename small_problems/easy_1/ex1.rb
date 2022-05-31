def repeat(str, rep)
  while rep > 0
    puts str
    rep -= 1
  end
end

repeat('Hello', 3)
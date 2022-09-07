def step(start, final, inc)
  until start > final
    yield(start)
    start += inc
  end
end

step(1, 10, 3) { |value| puts "value = #{value}" }
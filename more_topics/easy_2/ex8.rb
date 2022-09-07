def max_by(collection)
  return nil if collection.empty?
  max_yield = yield(collection.first)
  max = collection.first
  collection.each do |val|
    if yield(val) > max_yield
      max_yield = yield(val)
      max = val
    end
  end
  max
end

p max_by([1, 5, 3]) { |value| value + 2 } == 5
p max_by([1, 5, 3]) { |value| 9 - value } == 1
p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } == [3, 4, 5]
p max_by([-7]) { |value| value * 3 } == -7
p max_by([]) { |value| value + 5 } == nil
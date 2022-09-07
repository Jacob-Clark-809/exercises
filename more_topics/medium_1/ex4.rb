def a_method(array)
  yield(array)
end

birds = %w(raven finch hawk eagle)
a_method(array) do |_, _, *raptors|

end
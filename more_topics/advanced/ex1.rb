factorials = Enumerator.new do |y|
  y << 1
  count = 1
  a = 1
  loop do
    y << a
    count += 1
    a *= count
  end
end

7.times { puts factorials.next }
3.times { puts factorials.next }
factorials.rewind
7.times { puts factorials.next }